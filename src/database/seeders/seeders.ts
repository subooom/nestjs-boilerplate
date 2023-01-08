import { Logger } from '@nestjs/common';
import { Injectable } from '@nestjs/common/decorators';
import { UserSeederService } from './users/users.service';

@Injectable()
export class Seeder {
  private logger: Logger;
  constructor(private readonly userSeederService: UserSeederService) {
    this.logger = new Logger();
  }
  async seed() {
    await this.users()
      .then((completed) => {
        this.logger.debug('Successfuly completed seeding users...');
        Promise.resolve(completed);
      })
      .catch((error) => {
        this.logger.error('Failed seeding users...');
        Promise.reject(error);
      });
  }
  async users() {
    return await Promise.all(this.userSeederService.create())
      .then((createdUsers) => {
        // Can also use this.logger.verbose('...');
        this.logger.debug(
          'No. of languages created : ' +
            // Remove all null values and return only created users.
            createdUsers.filter(
              (nullValueOrCreatedLanguage) => nullValueOrCreatedLanguage,
            ).length,
        );
        return Promise.resolve(null);
      })
      .catch((error) => Promise.reject(error));
  }
}

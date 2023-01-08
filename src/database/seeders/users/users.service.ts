import { Injectable } from '@nestjs/common';
import { Users } from 'src/models/auth/entities/user.entity';
import { IUsers } from 'src/models/auth/interfaces/users.interface';
import { UsersRepository } from 'src/models/auth/users.repository';
import { Repository } from 'typeorm';
import { users } from './data';

/**
 * Service dealing with user based operations.
 *
 * @class
 */
@Injectable()
export class UserSeederService {
  /**
   * Create an instance of class.
   *
   * @constructs
   *
   * @param {UsersRepository} userRepository
   */
  constructor(private readonly userRepository: UsersRepository) {}
  /**
   * Seed all users.
   *
   * @function
   */
  create(): Promise<any>[] {
    return users.map(
      async (user: IUsers) =>
        await this.userRepository
          .findOneBy({ first_name: user.first_name })
          .then(async (dbUser) => {
            // We check if a user already exists.
            // If it does don't create a new one.
            if (dbUser) {
              return Promise.resolve(null);
            }
            return Promise.resolve(
              // or create(user).then(() => { ... });
              await this.userRepository.save(user),
            );
          })
          .catch((error) => Promise.reject(error)),
    );
  }
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/models/auth/entities/user.entity';
import { UsersRepository } from 'src/models/auth/users.repository';
import { UserSeederService } from './users.service';

/**
 * Import and provide seeder classes for users.
 *
 * @module
 */
@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [UserSeederService, UsersRepository],
  exports: [UserSeederService],
})
export class UserSeederModule {}

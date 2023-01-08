import { HasTimestamps } from 'src/database/interfaces/HasTimestamps';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IUsers } from '../interfaces/users.interface';

@Entity()
export class Users extends HasTimestamps implements IUsers {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  first_name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}

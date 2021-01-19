import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  name: String;

  @Column({ unique: true })
  email: string;

  @Column('text')
  password: string;

  @Column({nullable:true})
  fcmToken: string;
}

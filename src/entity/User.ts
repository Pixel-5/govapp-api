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

  @Column({ nullable: true })
  surname: String;

  @Column({ nullable: true })
  physical_address: String;

  @Column({ nullable: true })
  postal_address: String;

  @Column({ nullable: true })
  passport: String;

  @Column({ nullable: true })
  omang: String;

  @Column({ unique: true })
  email: string;

  @Column('text')
  password: string;

  @Column({nullable:true})
  fcmToken: string;
}

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
import { RoleName } from '../role.enum';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255, unique: true })
  email: string;

  @Column({ length: 255 })
  password: string;

  @Column({
    type: 'enum',
    enum: RoleName,
    default: RoleName.USER,
  })
  role: RoleName;

  @CreateDateColumn({
    type: 'timestamp',
    precision: 0,
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at: Date;
}

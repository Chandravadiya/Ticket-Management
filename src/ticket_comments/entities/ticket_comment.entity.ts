import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('ticket_comments')
export class TicketComment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ticket_id: number;

  @Column()
  user_id: number;

  @Column({ type: 'text' })
  comment: string;

  @CreateDateColumn({
    type: 'timestamp',
    precision: 0,
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at: Date;
}

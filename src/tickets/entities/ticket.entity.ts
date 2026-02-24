import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

export enum TicketStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  RESOLVED = 'RESOLVED',
  CLOSED = 'CLOSED',
}

export enum TicketPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}

@Entity('tickets')
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'enum', enum: TicketStatus, default: TicketStatus.OPEN })
  status: TicketStatus;

  @Column({ type: 'enum', enum: TicketPriority, default: TicketPriority.MEDIUM })
  priority: TicketPriority;

  @Column({ type: 'int' })
  created_by: number;

  @Column({ type: 'int', nullable: true })
  assigned_to: number | null;

  @CreateDateColumn({
    type: 'timestamp',
    precision: 0,
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at: Date;
}

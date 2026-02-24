import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTicketCommentDto } from './dto/create-ticket_comment.dto';
import { UpdateTicketCommentDto } from './dto/update-ticket_comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TicketComment } from './entities/ticket_comment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TicketCommentsService {
  constructor(
    @InjectRepository(TicketComment)
    private repo: Repository<TicketComment>,
  ) {}

  create(ticketId: number, user: { id: number }, dto: CreateTicketCommentDto) {
    const entity = this.repo.create({
      ticket_id: ticketId,
      user_id: user.id,
      comment: dto.comment,
    });
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find({ order: { created_at: 'DESC' } });
  }

  findByTicket(ticketId: number, user: { id: number }) {
    return this.repo.find({
      where: { ticket_id: ticketId },
      order: { created_at: 'DESC' },
    });
  }

  async findOne(id: number) {
    const c = await this.repo.findOne({ where: { id } });
    if (!c) throw new NotFoundException('Comment not found');
    return c;
  }

  async update(id: number, dto: UpdateTicketCommentDto) {
    await this.findOne(id);
    await this.repo.update(id, dto as Partial<TicketComment>);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.repo.delete(id);
  }
}

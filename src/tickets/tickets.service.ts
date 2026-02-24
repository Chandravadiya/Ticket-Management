import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from './entities/ticket.entity';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';

@Injectable()
export class TicketsService {
  constructor(
    @InjectRepository(Ticket)
    private repo: Repository<Ticket>,
  ) {}

  async create(dto: CreateTicketDto, user: { id: number }) {
    const ticket = this.repo.create({
      ...dto,
      created_by: user.id,
    } as Partial<Ticket>);
    return this.repo.save(ticket);
  }

  findAll() {
    return this.repo.find({ order: { created_at: 'DESC' } });
  }

  async findOne(id: number) {
    const ticket = await this.repo.findOne({ where: { id } });
    if (!ticket) throw new NotFoundException('Ticket not found');
    return ticket;
  }

  async update(id: number, dto: UpdateTicketDto) {
    await this.findOne(id);
    await this.repo.update(id, dto as Partial<Ticket>);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.repo.delete(id);
  }
}

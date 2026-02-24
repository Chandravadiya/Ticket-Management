import { Repository } from 'typeorm';
import { Ticket } from './entities/ticket.entity';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
export declare class TicketsService {
    private repo;
    constructor(repo: Repository<Ticket>);
    create(dto: CreateTicketDto, user: {
        id: number;
    }): Promise<Ticket>;
    findAll(): Promise<Ticket[]>;
    findOne(id: number): Promise<Ticket>;
    update(id: number, dto: UpdateTicketDto): Promise<Ticket>;
    remove(id: number): Promise<void>;
}

import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { User } from '../users/entities/user.entity';
export declare class TicketsController {
    private readonly ticketsService;
    constructor(ticketsService: TicketsService);
    create(createTicketDto: CreateTicketDto, user: User): Promise<import("./entities/ticket.entity").Ticket>;
    findAll(): Promise<import("./entities/ticket.entity").Ticket[]>;
    findOne(id: string): Promise<import("./entities/ticket.entity").Ticket>;
    update(id: string, dto: UpdateTicketDto): Promise<import("./entities/ticket.entity").Ticket>;
    remove(id: string): Promise<void>;
}

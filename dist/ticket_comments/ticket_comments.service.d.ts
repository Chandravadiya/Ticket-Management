import { CreateTicketCommentDto } from './dto/create-ticket_comment.dto';
import { UpdateTicketCommentDto } from './dto/update-ticket_comment.dto';
import { TicketComment } from './entities/ticket_comment.entity';
import { Repository } from 'typeorm';
export declare class TicketCommentsService {
    private repo;
    constructor(repo: Repository<TicketComment>);
    create(ticketId: number, user: {
        id: number;
    }, dto: CreateTicketCommentDto): Promise<TicketComment>;
    findAll(): Promise<TicketComment[]>;
    findByTicket(ticketId: number, user: {
        id: number;
    }): Promise<TicketComment[]>;
    findOne(id: number): Promise<TicketComment>;
    update(id: number, dto: UpdateTicketCommentDto): Promise<TicketComment>;
    remove(id: number): Promise<void>;
}

import { TicketCommentsService } from './ticket_comments.service';
import { CreateTicketCommentDto } from './dto/create-ticket_comment.dto';
import { User } from '../users/entities/user.entity';
export declare class TicketCommentsController {
    private readonly ticketCommentsService;
    constructor(ticketCommentsService: TicketCommentsService);
    getComments(ticketId: string, user: User): Promise<import("./entities/ticket_comment.entity").TicketComment[]>;
    createComment(ticketId: string, dto: CreateTicketCommentDto, user: User): Promise<import("./entities/ticket_comment.entity").TicketComment>;
}

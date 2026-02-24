import {Controller,Get,Post,Body,Patch,Param,Delete,UseGuards} from '@nestjs/common';
import { TicketCommentsService } from './ticket_comments.service';
import { CreateTicketCommentDto } from './dto/create-ticket_comment.dto';
import { UpdateTicketCommentDto } from './dto/update-ticket_comment.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { User } from '../users/entities/user.entity';

@Controller('tickets')
@UseGuards(JwtAuthGuard)
export class TicketCommentsController {
  constructor(private readonly ticketCommentsService: TicketCommentsService) {}

  @Get(':id/comments')
  getComments(@Param('id') ticketId: string, @CurrentUser() user: User) {
    return this.ticketCommentsService.findByTicket(+ticketId, user);
  }

  @Post(':id/comments')
  createComment(
    @Param('id') ticketId: string,
    @Body() dto: CreateTicketCommentDto,
    @CurrentUser() user: User,
  ) {
    return this.ticketCommentsService.create(+ticketId, user, dto);
  }
}

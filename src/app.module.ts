import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { Ticket } from './tickets/entities/ticket.entity';
import { TicketComment } from './ticket_comments/entities/ticket_comment.entity';
import { TicketsModule } from './tickets/tickets.module';
import { TicketCommentsModule } from './ticket_comments/ticket_comments.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [User, Ticket, TicketComment],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    UsersModule,
    TicketsModule,
    TicketCommentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
export declare class AuthService {
    private users;
    private jwt;
    constructor(users: Repository<User>, jwt: JwtService);
    login(dto: {
        email: string;
        password: string;
    }): Promise<{
        access_token: string;
    }>;
}

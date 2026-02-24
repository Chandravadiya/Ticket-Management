import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private users: Repository<User>,
    private jwt: JwtService,
  ) {}

  async login(dto: { email: string; password: string }) {
    const user = await this.users.findOne({ where: { email: dto.email } });
    if (!user) throw new UnauthorizedException('Invalid email or password');
    if (!(await bcrypt.compare(dto.password, user.password)))
      throw new UnauthorizedException('Invalid email or password');

    return {
      access_token: this.jwt.sign({ sub: user.id, role: user.role }),
    };
  }
}


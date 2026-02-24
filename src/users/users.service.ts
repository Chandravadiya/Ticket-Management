import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>,
  ) {}

  async create(dto: CreateUserDto) {
    const user = this.repo.create({
      ...dto,
      password: await bcrypt.hash(dto.password, 10),
    });
    return this.repo.save(user);
  }

  async findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    const user = await this.repo.findOne({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async update(id: number, dto: UpdateUserDto) {
    const user = await this.repo.findOne({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    if (dto.password) {
      (dto as { password: string }).password = await bcrypt.hash(dto.password, 10);
    }
    await this.repo.update(id, dto as Partial<User>);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.repo.delete(id);
  }
}

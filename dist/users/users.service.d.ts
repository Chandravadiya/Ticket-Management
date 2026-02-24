import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private repo;
    constructor(repo: Repository<User>);
    create(dto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    update(id: number, dto: UpdateUserDto): Promise<User>;
    remove(id: number): Promise<void>;
}

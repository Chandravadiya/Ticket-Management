import { IsEmail, IsEnum, IsString, MinLength } from 'class-validator';
import { RoleName } from '../role.enum';

export class CreateUserDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsEnum(RoleName)
  role: RoleName;
}

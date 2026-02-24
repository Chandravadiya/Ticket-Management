import { RoleName } from '../role.enum';
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: RoleName;
    created_at: Date;
}

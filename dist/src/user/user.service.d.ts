import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    findByEmail(email: string): Promise<UserEntity | null>;
    findById(id: number): Promise<UserEntity>;
    create(user: any): Promise<any>;
}

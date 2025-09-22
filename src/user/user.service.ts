import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { UserNotFoundException } from './exception/user-not-found.exception';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) { }

     async findByEmail(email: string): Promise<UserEntity|null> {
        return await this.userRepository.findOne({ where: { email } });
    }

    async findById(id: number): Promise<UserEntity> {
        const user = await this.userRepository.findOne({ where: { id } });

        if (!user) {
            throw new UserNotFoundException(id);
        }

        return user;
    }

    async create(user: any) {
        return await this.userRepository.save(user);
    }
}

import { MoodLogEntity } from "src/mood-log/mood-log.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Roles } from "./role.enum";

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @OneToMany(() => MoodLogEntity, moodLog => moodLog.user, {cascade: true, eager: false})
    moodLogs: MoodLogEntity[];

    @Column({ type: 'enum', enum: Roles, default: Roles.USER })
    role: Roles = Roles.USER;
}
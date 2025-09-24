import { MoodLogEntity } from "src/mood-log/mood-log.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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
}
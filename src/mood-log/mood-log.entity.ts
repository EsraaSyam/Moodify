import { MoodEntity } from "src/mood/mood.entity";
import { UserEntity } from "src/user/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("mood_logs")
export class MoodLogEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    note: string;

    @ManyToOne(() => UserEntity, user => user.moodLogs, {onDelete: 'CASCADE', eager: true})
    user: UserEntity;

    @ManyToOne(() => MoodEntity, mood => mood.moodLogs, {onDelete: 'SET NULL', eager: true})
    mood: MoodEntity;
}
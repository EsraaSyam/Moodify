import { MoodLogEntity } from "src/mood-log/mood-log.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('moods')
export class MoodEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @OneToMany(() => MoodLogEntity, moodLog => moodLog.mood, {cascade: true, eager: false})
    moodLogs: MoodLogEntity[];
}
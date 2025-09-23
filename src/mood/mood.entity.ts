import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('moods')
export class MoodEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;
}
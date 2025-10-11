import { MoodEntity } from "src/mood/mood.entity";
import { UserEntity } from "src/user/user.entity";
export declare class MoodLogEntity {
    id: number;
    note: string;
    user: UserEntity;
    mood: MoodEntity;
    createdAt: Date;
}

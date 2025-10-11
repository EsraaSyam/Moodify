import { MoodLogEntity } from "src/mood-log/mood-log.entity";
import { Roles } from "./role.enum";
export declare class UserEntity {
    id: number;
    name: string;
    email: string;
    password: string;
    moodLogs: MoodLogEntity[];
    role: Roles;
}

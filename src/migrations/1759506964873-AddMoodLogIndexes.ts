import { MigrationInterface, QueryRunner } from "typeorm";

export class AddMoodLogIndexes1759506964873 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE INDEX idx_mood_user_created_at ON mood_logs(user_id, created_at);
            `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP INDEX idx_mood_user_created_at;
        `);
    }

}

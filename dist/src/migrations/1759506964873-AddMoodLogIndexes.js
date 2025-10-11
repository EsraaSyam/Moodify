"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddMoodLogIndexes1759506964873 = void 0;
class AddMoodLogIndexes1759506964873 {
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE INDEX idx_mood_user_created_at ON mood_logs(user_id, created_at);
            `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            DROP INDEX idx_mood_user_created_at;
        `);
    }
}
exports.AddMoodLogIndexes1759506964873 = AddMoodLogIndexes1759506964873;
//# sourceMappingURL=1759506964873-AddMoodLogIndexes.js.map
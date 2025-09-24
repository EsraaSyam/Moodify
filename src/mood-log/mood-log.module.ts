import { Module } from '@nestjs/common';
import { MoodLogService } from './mood-log.service';
import { MoodLogController } from './mood-log.controller';
import { UserModule } from 'src/user/user.module';
import { MoodLogEntity } from './mood-log.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoodModule } from 'src/mood/mood.module';

@Module({
  imports: [
    UserModule,
    MoodModule,
    TypeOrmModule.forFeature([MoodLogEntity]),
  ],
  providers: [MoodLogService],
  controllers: [MoodLogController],
})
export class MoodLogModule {}

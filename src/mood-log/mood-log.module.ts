import { Module } from '@nestjs/common';
import { MoodLogService } from './mood-log.service';
import { MoodLogController } from './mood-log.controller';
import { UserModule } from 'src/user/user.module';
import { MoodLogEntity } from './mood-log.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoodModule } from 'src/mood/mood.module';
import { UserEntity } from 'src/user/user.entity';
import { MoodEntity } from 'src/mood/mood.entity';

@Module({
  imports: [
    UserModule,
    MoodModule,
    TypeOrmModule.forFeature([MoodLogEntity, UserEntity, MoodEntity]),
  ],
  providers: [MoodLogService],
  controllers: [MoodLogController],
  exports: [MoodLogService],
})
export class MoodLogModule {}

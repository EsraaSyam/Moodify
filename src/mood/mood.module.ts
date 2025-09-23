import { Module } from '@nestjs/common';
import { MoodService } from './mood.service';
import { MoodController } from './mood.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoodEntity } from './mood.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MoodEntity])],
  providers: [MoodService],
  controllers: [MoodController],
  exports: [MoodService],
})
export class MoodModule {}

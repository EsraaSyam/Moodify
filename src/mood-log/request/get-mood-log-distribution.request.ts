import { IsNumber, IsOptional, IsString, Validate } from 'class-validator';
import { DatesTogetherConstraint } from 'src/validator/validation-constrains.decorator';

export class GetMoodLogDistributionRequest {
  @IsNumber()
  userId: number;

  @IsOptional()
  @IsString()
  startDate?: string;

  @IsOptional()
  @IsString()
  endDate?: string;

  @Validate(DatesTogetherConstraint)
  validateDates!: boolean;
}
// create-list.dto.ts
import { IsString, IsBoolean, IsDate, IsOptional} from 'class-validator';
import { Type } from 'class-transformer';


export class CreateListDto {
  @IsString()
  companyName: string;

  @IsString()
  jobTitle: string;

  @IsString()
  jobLink: string;

  @IsString()
  prefrence: string;

  @IsString()
  qualify: string;

  @IsBoolean()
  @IsOptional() // Mark as optional if it can be left out during creation
  tailorResume: boolean;

  @IsBoolean()
  @IsOptional()
  tailorCoverLetter: boolean;

  @IsDate()
  @Type(() => Date)
  @IsOptional() // Optional because you may not always have a date at the creation time
  dateApplied: Date;

  @IsString()
  @IsOptional()
  result: string;
}

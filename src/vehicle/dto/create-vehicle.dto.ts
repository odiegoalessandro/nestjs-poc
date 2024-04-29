import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';
import { Create } from 'src/misc/interface/input.interface';
import { Vehicle } from '../entities/vehicle.entity';

export class CreateVehicleDto implements Create<Vehicle> {
  @IsNotEmpty()
  @IsString()
  plate?: string;

  @IsNotEmpty()
  @IsString()
  name?: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1900)
  @Max(new Date().getFullYear())
  year?: number;

  @IsNotEmpty()
  @IsNumber()
  userId?: number;

  @IsNotEmpty()
  @IsString()
  model?: string;
}

import { PartialType } from '@nestjs/mapped-types';
import { Vehicle } from '@prisma/client';
import { Update } from 'src/misc/interface/input.interface';
import { CreateVehicleDto } from './create-vehicle.dto';

export class UpdateVehicleDto
  extends PartialType(CreateVehicleDto)
  implements Update<Vehicle> {}

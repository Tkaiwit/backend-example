import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { CatSchema } from './cats.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }]),
  ],
  providers: [CatsService],
  controllers: [CatsController]
})
export class CatsModule { }

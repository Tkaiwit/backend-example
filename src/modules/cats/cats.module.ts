import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { CatsGateway } from './cats.gateway'
import { CatsSchemas } from './schemas/cats.schemas';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports:[
      MongooseModule.forFeature([{name: 'Cat', schema: CatsSchemas}]),
  ],
  providers: [CatsService, CatsGateway],
  controllers: [CatsController]
})
export class CatsModule {}

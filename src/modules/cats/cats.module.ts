import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { CatsGateway } from './cats.gateway'

@Module({
  providers: [CatsService, CatsGateway],
  controllers: [CatsController]
})
export class CatsModule {}

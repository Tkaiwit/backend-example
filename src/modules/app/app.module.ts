import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import configuration from '../../config/configuration'
import { CatsModule } from '../cats/cats.module'
import { MongooseModule } from '@nestjs/mongoose'


@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    CatsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/dbcats'),
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {
}

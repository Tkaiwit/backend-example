import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { AppModule } from './modules/app/app.module'
import { RedisIoAdapter } from './adapters/redis-io.adapter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('api')
  app.useWebSocketAdapter(new RedisIoAdapter(app))
  app.useGlobalPipes(new ValidationPipe())
  // await app.listen(process.env.PORT)
  await app.listen(3000)

}
import { from } from 'rxjs';

bootstrap()

import { NestFactory } from '@nestjs/core'; // nest import
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // Create an app with NEST
  await app.listen(3001); // port 
}
bootstrap();

import { Module } from '@nestjs/common';
import { AppController, AuthController } from './app.controller';
import { AppService, AuthService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}

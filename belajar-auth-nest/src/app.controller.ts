import { Controller, Get, HttpCode } from '@nestjs/common';
import { AppService, AuthService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(200)
  getHello(): object {
    return this.appService.getHello();
  }

  @Get('/pets')
  @HttpCode(200)
  getPets(): object {
    return this.appService.getPets();
  }
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/register')
  getRegister(): object {
    return this.authService.getRegister();
  }
  @Get('/login')
  getLogin(): object {
    return this.authService.getLogin();
  }
}

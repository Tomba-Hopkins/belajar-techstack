import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      status: 'ok',
      message: 'Welcome home',
    };
  }
  getPets(): object {
    return {
      status: 'ok',
      message: 'My pets are cats',
    };
  }
}

@Injectable()
export class AuthService {
  getRegister(): object {
    return {
      status: 'ok',
      message: 'Here is your register page',
    };
  }
  getLogin(): object {
    return {
      status: 'ok',
      message: 'Here is your login page',
    };
  }
}

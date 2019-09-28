import { Controller, Dependencies, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
@Dependencies(AppService)
export class AppController {
  constructor(appService) {
    this.appService = appService;
  }

  @Get()
  async getHello() {
    console.log('1');
    await setTimeout(function() {
      console.log('timeout completed');
    }, 1000);
    console.log('2');
    return this.appService.getHello();
  }
}

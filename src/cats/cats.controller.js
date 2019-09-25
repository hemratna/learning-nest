import { Controller, Get, Req, Bind, Post, Param } from '@nestjs/common';
import { bindCallback } from '../../node_modules/rxjs/index';

@Controller('cats')
export class CatsController {
  @Get()
  index() {
    return 'List of all cats';
  }

  @Post()
  store() {
    return 'create new cat';
  }

  @Get('profile/:id')
  @Bind(Param('id'), Req())
  profile(id, request) {
    let data = {};
    data.params = id;
    data.query = request.query;
    return data;
    return {
      id: 1,
      name: 'test',
      price: 11.3,
      hobby: ['singing', 'dancing'],
    };
  }
}

import {
  Controller,
  Content,
  Get,
  Post,
  Body
} from 'alosaur/mod.ts';


@Controller('/home')
export class HomeController {

  constructor() {}

  @Get('/text')
  text() {
    return Content(`Hello world`);
  }

  @Post('/post')
  post(@Body() body) {
    return Content(body);
  }
}

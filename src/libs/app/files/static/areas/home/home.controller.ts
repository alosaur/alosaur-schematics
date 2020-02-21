import {
  Controller,
  Get,
  Content,
  QueryParam
} from 'alosaur/mod.ts';

@Controller('/home')
export class HomeController {
  @Get('/text')
  text(@QueryParam('name') name: string) {
    return Content(`Hey! ${name}`);
  }
}

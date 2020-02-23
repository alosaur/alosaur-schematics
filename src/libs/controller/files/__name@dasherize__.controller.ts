import { Controller, Content, Get } from 'alosaur/mod.ts';

@Controller('/<%= dasherize(name) %>')
export class <%= classify(name) %>Controller {
  @Get('/text')
  public text() {
    return Content('Hello world');
  }

  @Get('/json')
  public json() {
    return Content({ text: 'test' });
  }
}

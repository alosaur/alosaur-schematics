import {
  Controller,
  Content,
  Get
} from 'alosaur/mod.ts';

import { UserService } from '../../services/user.service.ts';

@Controller('/home')
export class HomeController {

  constructor(private service: UserService) {
  }

  @Get('/users')
  async text() {
    return Content(await this.service.getUsers());
  }
}

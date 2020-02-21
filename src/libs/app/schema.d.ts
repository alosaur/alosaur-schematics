import { Path } from '@angular-devkit/core';

import { TemplateEnum } from './template.enum';

export interface IAppOptions {
  /**
   * The name of the App.
   */
  name: string;
  /**
   * The type of boilerplate
   */
  template?: TemplateEnum;
  /**
   * The path to create the app.
   */
  path?: string | Path;
}

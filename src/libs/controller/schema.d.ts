import { Path } from '@angular-devkit/core';

export interface IControllerOptions {
  /**
   * The name of the Controller.
   */
  name: string;
  /**
   * The path to create the Controller.
   */
  path?: string | Path;
  /**
   * The source root path
   */
  sourceRoot?: string;
  /**
   * Flag to indicate if a directory is created.
   */
  flat?: boolean;
}

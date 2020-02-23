import { Path } from '@angular-devkit/core';

export interface IAreaOptions {
  /**
   * The name of the Area.
   */
  name: string;
  /**
   * The path to create the area.
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

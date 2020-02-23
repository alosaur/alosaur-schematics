import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

import { IControllerOptions } from './schema';


export function controller(_options: IControllerOptions): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    return tree;
  };
}

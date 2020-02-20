import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

import { IAppOptions } from './schema';


export function app(_options: IAppOptions): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    return tree;
  };
}

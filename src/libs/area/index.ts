import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

import { IAreaOptions } from './schema';


export function area(_options: IAreaOptions): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    return tree;
  };
}

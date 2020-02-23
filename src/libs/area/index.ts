import {
  apply,
  branchAndMerge,
  chain, mergeWith,
  move,
  Rule,
  SchematicContext,
  template,
  Tree,
  url
} from '@angular-devkit/schematics';
import { join, Path, strings } from '@angular-devkit/core';

import { IAreaOptions } from './schema';
import { NameParser, Location } from '../../utilities';
import { IAppOptions } from '../app/schema';
import { mergeSourceRoot } from '../../utilities/source-root.helpers';


export function area(_options: IAreaOptions): Rule {
  const options = transform(_options);

  return (tree: Tree, _context: SchematicContext) => {
    return branchAndMerge(
      chain([
        mergeSourceRoot(options),
        mergeWith(generate(options))
      ]),
    )(tree, _context);
  };
}

function transform(source: IAreaOptions): IAreaOptions {
  const target: IAreaOptions = Object.assign({}, source);

  const location: Location = new NameParser().parse(target);
  target.name = strings.dasherize(location.name);
  target.path = strings.dasherize(location.path);
  target.path = target.flat
    ? target.path
    : join(target.path as Path, target.name);
  return target;
}

function generate(options: IAppOptions) {
  return (context: SchematicContext) =>
    apply(url('./files'), [
      template({
        ...strings,
        ...options,
      }),
      move(<string>options.path)
    ])(context);
}

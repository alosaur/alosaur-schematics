import {
  apply,
  branchAndMerge,
  chain,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  template,
  Tree,
  url
} from '@angular-devkit/schematics';
import { join, Path, strings } from '@angular-devkit/core';

import { IAppOptions } from './schema';
import { Location, NameParser } from '../../utilities/name.parser';
import { DEFAULT_APP_PATH, DEFAULT_BOILERPLATE } from '../../utilities/defaults';


export function app(_options: IAppOptions): Rule {
  const options = transform(_options);
  return (tree: Tree, _context: SchematicContext) => {
    return branchAndMerge(
      chain([
        mergeWith(generate(options))
      ])
    )(tree, _context);
  };
}

function transform(source: IAppOptions): IAppOptions {
  const target: IAppOptions = Object.assign({}, source);

  const location: Location = new NameParser().parse(target);
  target.name = strings.dasherize(location.name);
  target.template = target.template !== undefined ? target.template : DEFAULT_BOILERPLATE;
  const path = strings.dasherize(location.path);
  target.path = target.path !== undefined ? join(path as Path, target.name) : join(DEFAULT_APP_PATH as Path, target.name);
  return target;
}

function generate(options: IAppOptions) {
  return (context: SchematicContext) =>
    apply(url(join('./files' as Path, <string>options.template)), [
      template({
        ...strings,
        ...options,
      }),
      move(<string>options.path)
    ])(context);
}

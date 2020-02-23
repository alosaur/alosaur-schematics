import { join, normalize } from '@angular-devkit/core';
import { Rule, Tree } from '@angular-devkit/schematics';

import { DEFAULT_APP_PATH } from './defaults';

export function isInRootDirectory(
  host: Tree,
  extraFiles: string[] = []
): boolean {
  const files = ['alosaur.json', 'imports.json', 'prettierrc.json'].concat(extraFiles || []);
  return files.map(file => host.exists(file)).some(isPresent => isPresent);
}

export function mergeSourceRoot<T extends { sourceRoot?: string; path?: string } = any>(options: T): Rule {
  return (host: Tree) => {
    const isInRoot = isInRootDirectory(host, ['package.json', 'tsconfig.json']);
    if (!isInRoot) {
      return host;
    }
    const defaultSourceRoot =
            options.sourceRoot !== undefined ? options.sourceRoot : DEFAULT_APP_PATH;

    options.path =
            options.path !== undefined
              ? join(normalize(defaultSourceRoot), options.path)
              : normalize(defaultSourceRoot);

    return host;
  };
}

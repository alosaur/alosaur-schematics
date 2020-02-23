import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';

import { IControllerOptions } from './schema';

const collectionPath = path.join(__dirname, '../../collection.json');

describe('Alosaur Controller', () => {
  const runner = new SchematicTestRunner('.', collectionPath);

  it('works', () => {
    const options: IControllerOptions = {
      name: 'foo'
    };
    const tree = runner.runSchematic('controller', options, Tree.empty());

    expect(tree.files).toEqual([]);
  });
});

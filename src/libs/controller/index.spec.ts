import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';

const collectionPath = path.join(__dirname, '../../collection.json');

describe('Alosaur Controller', () => {
  const runner = new SchematicTestRunner('.', collectionPath);

  it('works', () => {
    const tree = runner.runSchematic('controller', {}, Tree.empty());

    expect(tree.files).toEqual([]);
  });
});

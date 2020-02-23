import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';


const collectionPath = path.join(__dirname, '../../collection.json');


describe('Alosaur Area', () => {
  it('works', () => {
    const runner = new SchematicTestRunner('.', collectionPath);
    const tree = runner.runSchematic('area', {}, Tree.empty());

    expect(tree.files).toEqual([]);
  });
});

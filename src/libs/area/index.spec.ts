import * as path from 'path';

import {
  SchematicTestRunner,
  UnitTestTree
} from '@angular-devkit/schematics/testing';

import { IAreaOptions } from './schema';

const collectionPath = path.join(__dirname, '../../collection.json');

describe('Alosaur Area', () => {
  const runner = new SchematicTestRunner('.', collectionPath);

  it('should manage name only', () => {
    expect.assertions(2);

    const options: IAreaOptions = {
      name: 'foo'
    };
    const tree: UnitTestTree = runner.runSchematic('area', options);
    const files: string[] = tree.files;

    expect(
      files.find((filename: string) => {
        return filename === '/foo/foo.area.ts';
      })
    ).not.toBeUndefined();
    expect(tree.readContent('/foo/foo.area.ts')).toStrictEqual(
      'import { Area } from \'alosaur/mod.ts\';\n' +
            '\n' +
            '@Area()\n' +
            'export class FooArea {}\n'
    );
  });

  it('should manage name as a path', () => {
    expect.assertions(2);

    const options: IAreaOptions = {
      name: 'bar/foo'
    };
    const tree: UnitTestTree = runner.runSchematic('area', options);
    const files: string[] = tree.files;

    expect(
      files.find((filename: string) => {
        return filename === '/bar/foo/foo.area.ts';
      })
    ).not.toBeUndefined();
    expect(tree.readContent('/bar/foo/foo.area.ts')).toStrictEqual(
      'import { Area } from \'alosaur/mod.ts\';\n' +
            '\n' +
            '@Area()\n' +
            'export class FooArea {}\n'
    );
  });

  it('should manage name and path', () => {
    expect.assertions(2);

    const options: IAreaOptions = {
      name: 'foo',
      path: 'bar'
    };
    const tree: UnitTestTree = runner.runSchematic('area', options);
    const files: string[] = tree.files;

    expect(
      files.find((filename: string) => {
        return filename === '/bar/foo/foo.area.ts';
      })
    ).not.toBeUndefined();
    expect(tree.readContent('/bar/foo/foo.area.ts')).toStrictEqual(
      'import { Area } from \'alosaur/mod.ts\';\n' +
            '\n' +
            '@Area()\n' +
            'export class FooArea {}\n'
    );
  });

  it('should manage name to dasherize\'', () => {
    expect.assertions(2);

    const options: IAreaOptions = {
      name: 'fooBar'
    };
    const tree: UnitTestTree = runner.runSchematic('area', options);
    const files: string[] = tree.files;

    expect(
      files.find((filename: string) => {
        return filename === '/foo-bar/foo-bar.area.ts';
      })
    ).not.toBeUndefined();
    expect(tree.readContent('/foo-bar/foo-bar.area.ts')).toStrictEqual(
      'import { Area } from \'alosaur/mod.ts\';\n' +
            '\n' +
            '@Area()\n' +
            'export class FooBarArea {}\n'
    );
  });

  it('should not create a directory if "flat" is true', () => {
    expect.assertions(2);

    const options: IAreaOptions = {
      name: 'foo',
      flat: true
    };
    const tree: UnitTestTree = runner.runSchematic('area', options);
    const files: string[] = tree.files;

    expect(
      files.find((filename: string) => {
        return filename === '/foo.area.ts';
      })
    ).not.toBeUndefined();
    expect(tree.readContent('/foo.area.ts')).toStrictEqual(
      'import { Area } from \'alosaur/mod.ts\';\n' +
            '\n' +
            '@Area()\n' +
            'export class FooArea {}\n'
    );
  });
});

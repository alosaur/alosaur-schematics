import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import * as path from 'path';

import { IControllerOptions } from './schema';

const collectionPath = path.join(__dirname, '../../collection.json');

describe('Alosaur Controller', () => {
  const runner = new SchematicTestRunner('.', collectionPath);

  it('should manage name only', () => {
    const options: IControllerOptions = {
      name: 'foo'
    };
    const tree: UnitTestTree = runner.runSchematic('controller', options);
    const files: string[] = tree.files;
    expect(
      files.find(filename => filename === '/foo/foo.controller.ts'),
    ).not.toBeUndefined();
    expect(tree.readContent('/foo/foo.controller.ts')).toEqual(
      'import { Controller, Content, Get } from \'alosaur/mod.ts\';\n' +
            '\n' +
            '@Controller(\'/foo\')\n' +
            'export class FooController {\n' +
            '  @Get(\'/text\')\n' +
            '  public text() {\n' +
            '    return Content(\'Hello world\');\n' +
            '  }\n' +
            '\n' +
            '  @Get(\'/json\')\n' +
            '  public json() {\n' +
            '    return Content({ text: \'test\' });\n' +
            '  }\n' +
            '}\n'
    );
  });

  it('should manage name as a path', () => {
    const options: IControllerOptions = {
      name: 'bar/foo'
    };
    const tree: UnitTestTree = runner.runSchematic('controller', options);
    const files: string[] = tree.files;
    expect(
      files.find(filename => filename === '/bar/foo/foo.controller.ts'),
    ).not.toBeUndefined();
    expect(tree.readContent('/bar/foo/foo.controller.ts')).toEqual(
      'import { Controller, Content, Get } from \'alosaur/mod.ts\';\n' +
            '\n' +
            '@Controller(\'/foo\')\n' +
            'export class FooController {\n' +
            '  @Get(\'/text\')\n' +
            '  public text() {\n' +
            '    return Content(\'Hello world\');\n' +
            '  }\n' +
            '\n' +
            '  @Get(\'/json\')\n' +
            '  public json() {\n' +
            '    return Content({ text: \'test\' });\n' +
            '  }\n' +
            '}\n'
    );
  });

  it('should manage name and path', () => {
    const options: IControllerOptions = {
      name: 'foo',
      path: 'bar'
    };
    const tree: UnitTestTree = runner.runSchematic('controller', options);
    const files: string[] = tree.files;
    expect(
      files.find(filename => filename === '/bar/foo/foo.controller.ts'),
    ).not.toBeUndefined();
    expect(tree.readContent('/bar/foo/foo.controller.ts')).toEqual(
      'import { Controller, Content, Get } from \'alosaur/mod.ts\';\n' +
            '\n' +
            '@Controller(\'/foo\')\n' +
            'export class FooController {\n' +
            '  @Get(\'/text\')\n' +
            '  public text() {\n' +
            '    return Content(\'Hello world\');\n' +
            '  }\n' +
            '\n' +
            '  @Get(\'/json\')\n' +
            '  public json() {\n' +
            '    return Content({ text: \'test\' });\n' +
            '  }\n' +
            '}\n'
    );
  });

  it('should manage name to dasherize\'', () => {
    const options: IControllerOptions = {
      name: 'fooBar'
    };
    const tree: UnitTestTree = runner.runSchematic('controller', options);
    const files: string[] = tree.files;
    expect(
      files.find(filename => filename === '/foo-bar/foo-bar.controller.ts'),
    ).not.toBeUndefined();
    expect(tree.readContent('/foo-bar/foo-bar.controller.ts')).toEqual(
      'import { Controller, Content, Get } from \'alosaur/mod.ts\';\n' +
            '\n' +
            '@Controller(\'/foo-bar\')\n' +
            'export class FooBarController {\n' +
            '  @Get(\'/text\')\n' +
            '  public text() {\n' +
            '    return Content(\'Hello world\');\n' +
            '  }\n' +
            '\n' +
            '  @Get(\'/json\')\n' +
            '  public json() {\n' +
            '    return Content({ text: \'test\' });\n' +
            '  }\n' +
            '}\n'
    );
  });

  it('should not create a directory if "flat" is true', () => {
    const options: IControllerOptions = {
      name: 'foo',
      flat: true
    };
    const tree: UnitTestTree = runner.runSchematic('controller', options);
    const files: string[] = tree.files;
    expect(
      files.find(filename => filename === '/foo.controller.ts'),
    ).not.toBeUndefined();
    expect(tree.readContent('/foo.controller.ts')).toEqual(
      'import { Controller, Content, Get } from \'alosaur/mod.ts\';\n' +
            '\n' +
            '@Controller(\'/foo\')\n' +
            'export class FooController {\n' +
            '  @Get(\'/text\')\n' +
            '  public text() {\n' +
            '    return Content(\'Hello world\');\n' +
            '  }\n' +
            '\n' +
            '  @Get(\'/json\')\n' +
            '  public json() {\n' +
            '    return Content({ text: \'test\' });\n' +
            '  }\n' +
            '}\n'
    );
  });
});

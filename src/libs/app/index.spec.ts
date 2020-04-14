import * as path from 'path';

import {
  SchematicTestRunner,
  UnitTestTree
} from '@angular-devkit/schematics/testing';

import { IAppOptions } from './schema';
import { TemplateEnum } from './template.enum';

const collectionPath = path.join(__dirname, '../../collection.json');

describe('Alosaur App generation', () => {
  const runner = new SchematicTestRunner('.', collectionPath);

  it('should manage name only', () => {
    expect.assertions(1);

    const options: IAppOptions = {
      name: 'foo'
    };
    const tree: UnitTestTree = runner.runSchematic('app', options);
    const files: string[] = tree.files;

    expect(files).toStrictEqual([
      '/foo/README.md',
      '/foo/alosaur.json',
      '/foo/app.ts',
      '/foo/imports.json',
      '/foo/package.json',
      '/foo/prettierrc.json',
      '/foo/tsconfig.json',
      '/foo/areas/home/home.area.ts',
      '/foo/areas/home/home.controller.ts',
      '/foo/areas/info/info.area.ts',
      '/foo/areas/info/info.controller.ts',
      '/foo/middlwares/log.middlware.ts'
    ]);
  });

  it('should manage name to dasherize', () => {
    expect.assertions(1);

    const options: IAppOptions = {
      name: 'fooBar'
    };
    const tree: UnitTestTree = runner.runSchematic('app', options);
    const files: string[] = tree.files;

    expect(files).toStrictEqual([
      '/foo-bar/README.md',
      '/foo-bar/alosaur.json',
      '/foo-bar/app.ts',
      '/foo-bar/imports.json',
      '/foo-bar/package.json',
      '/foo-bar/prettierrc.json',
      '/foo-bar/tsconfig.json',
      '/foo-bar/areas/home/home.area.ts',
      '/foo-bar/areas/home/home.controller.ts',
      '/foo-bar/areas/info/info.area.ts',
      '/foo-bar/areas/info/info.controller.ts',
      '/foo-bar/middlwares/log.middlware.ts'
    ]);
  });

  it('should manage cors template', () => {
    expect.assertions(1);

    const options: IAppOptions = {
      name: 'foo',
      template: TemplateEnum.CORS
    };
    const tree: UnitTestTree = runner.runSchematic('app', options);
    const files: string[] = tree.files;

    expect(files).toStrictEqual([
      '/foo/README.md',
      '/foo/alosaur.json',
      '/foo/app.ts',
      '/foo/imports.json',
      '/foo/package.json',
      '/foo/prettierrc.json',
      '/foo/tsconfig.json',
      '/foo/areas/home/home.area.ts',
      '/foo/areas/home/home.controller.ts'
    ]);
  });

  it('should manage db template', () => {
    expect.assertions(1);

    const options: IAppOptions = {
      name: 'foo',
      template: TemplateEnum.DB
    };
    const tree: UnitTestTree = runner.runSchematic('app', options);
    const files: string[] = tree.files;

    expect(files).toStrictEqual([
      '/foo/README.md',
      '/foo/alosaur.json',
      '/foo/app.ts',
      '/foo/database.ts',
      '/foo/docker-compose.yml',
      '/foo/imports.json',
      '/foo/package.json',
      '/foo/prettierrc.json',
      '/foo/tsconfig.json',
      '/foo/areas/home/home.area.ts',
      '/foo/areas/home/home.controller.ts',
      '/foo/services/user.service.ts'
    ]);
  });

  it('should manage docker template', () => {
    expect.assertions(1);

    const options: IAppOptions = {
      name: 'foo',
      template: TemplateEnum.DOCKER
    };
    const tree: UnitTestTree = runner.runSchematic('app', options);
    const files: string[] = tree.files;

    expect(files).toStrictEqual([
      '/foo/Dockerfile',
      '/foo/README.md',
      '/foo/alosaur.json',
      '/foo/app.ts',
      '/foo/imports.json',
      '/foo/package.json',
      '/foo/prettierrc.json',
      '/foo/tsconfig.json',
      '/foo/areas/home/home.area.ts',
      '/foo/areas/home/home.controller.ts',
      '/foo/areas/info/info.area.ts',
      '/foo/areas/info/info.controller.ts'
    ]);
  });

  it('should manage static template', () => {
    expect.assertions(1);

    const options: IAppOptions = {
      name: 'foo',
      template: TemplateEnum.STATIC
    };
    const tree: UnitTestTree = runner.runSchematic('app', options);
    const files: string[] = tree.files;

    expect(files).toStrictEqual([
      '/foo/README.md',
      '/foo/alosaur.json',
      '/foo/app.ts',
      '/foo/imports.json',
      '/foo/package.json',
      '/foo/prettierrc.json',
      '/foo/tsconfig.json',
      '/foo/areas/home/home.area.ts',
      '/foo/areas/home/home.controller.ts',
      '/foo/www/index.html',
      '/foo/www/test.txt'
    ]);
  });
});

# This repository is no longer supported, all templates have been moved to alosaur/cli

Use this:
https://github.com/alosaur/cli





------------------------

# Alosaur Schematics

This repository contains schematics for Alosaur Web Framework

> This project uses Yarn as package manager.

### How to use

```shell script
npm i -g @angular-devkit/schematics-cli

or

yarn add -g @angular-devkit/schematics-cli

git clone git@github.com:alosaur/alosaur-schematics.git

cd alosaur-schematics && yarn install

yarn build

cd <some_directory>

schematics <directory_to_cloned_alosaur-schematics>/dist/collection.json:<schema_name> [...flags] # Look at schemas section to see available schemas
```

### Schemas

1) `app` - Alosaur boilerplate generation
    * Flags
      * `name` - Name of the project. [Required]
      * `template` - Type of Boilerplate to create (Default: `default`)
        * `Types` - default, angular, handlebars, spa, basic, cors, db, docker and static
      * `path` - Path to create project (Default: <current_directory>/<project-name>)
      
 2) `area` - Alosaur area generation
    * Flags
        * `name` - Name of the Area. [Required]
        * `path` - Path to create Area (Default: <project_directory>/< name>/< name>.area.ts)
        * `flat` - Flag to indicate if a directory is created. (Default: `false`)

3) `controller` - Alosaur controller generation
   * Flags
       * `name` - Name of the Controller. [Required]
       * `path` - Path to create Controller (Default: <project_directory>/< name>/< name>.controller.ts)
       * `flat` - Flag to indicate if a directory is created. (Default: `false`)

### Example

```shell script
schematics ./alosaur-schematics/dist/collection.json:app --template=cors --name=cors-sample --debug=false
```

> NOTE: `debug` flag should be false to create actual files

That's it!

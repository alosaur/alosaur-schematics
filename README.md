# Alosaur Schematics

This repository contains schematics for Alosaur Web Framework

> This project uses Yarn as package manager.

### How to use

```shell script
npm i -g @angular-devkit/schematics-cli

or

yarn add -g @angular-devkit/schematics-cli

git clone git@github.com:emjimadhu/alosaur-schematics.git

cd alosaur-schematics && yarn install

yarn build

cd <some_directory>

schematics <directory_to_cloned_alosaur-schematics>/dist/collection.json:<schema_name> [...flags] # Look at schemas section to see available schemas
```

### Schemas

1) `app` - Alosaur boilerplate generation
    * Flags
      * `name` - Name of the project. [Required]
      * `template` - Type of Boilerplate to create (Default: `basic`)
        * `Types` - basic, cors, db, docker and static
      * `path` - Path to create project (Default: <current_directory>/<project-name>)

### Example

```shell script
schematics ./alosaur-schematics/dist/collection.json:app --template=cors --name=cors-sample --debug=false
```

> NOTE: `debug` flag should be false to create actual files

That's it!

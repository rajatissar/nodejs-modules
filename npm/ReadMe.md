# npm tools

## npm modules to install globally

### 1. npkill

$ npm i -g npkill

## npm tips

1. The best time to npm init is after you’ve added a Git remote to your project.
   If you npm init after you have added a Git remote, npm will generate three extra things in your package.json files. They are:
   1. A repository property with a link to your remote repo
   2. A bugs property with a link to the issues page.
   3. A homepage property that links to the readme.md file.
e.g.
   "repository": {
    "type": "git",
    "url": "git+https://github.com/rajatissar/nodejs-modules.git"
   },
   "bugs": {
     "url": "https://github.com/rajatissar/nodejs-modules/issues"
   },
   "homepage": "https://github.com/rajatissar/nodejs-modules#readme",

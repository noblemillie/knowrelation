#Build Notes

Documentation: Markdown Editor in Vue.js
      https://coligo.io/markdown-editor-vuejs/
      Github css
      $ npm install --save github-markdown-css


Cross-Platform Integration: Electron
      framework for creating native applications with web technologies like JavaScript, HTML, and CSS
      <!-- Clone the Quick Start repository -->
      $ git clone https://github.com/electron/electron-quick-start
      $ cd electron-quick-start
      $ npm install && npm start


node v5.10.0 as electron v1.0.1
   Node Version Manager
   curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash

nvm install 5.0
nvm use 5.0
<!-- or -->
nvm run 5.0 --version
nvm install node --reinstall-packages-from=node

npm install npm-autoinit

electron-vue cli
   git clone https://github.com/SimulatedGREG/electron-vue
   cd electron-vue
   npm install

   Development environment -
      <!-- start app -->
      npm run dev

Vue Plugins
   vue-resource (web requests)
   vue-router (single page application routes)
   vuex (flux-inspired application architecture)

Native NPM modules
   npm install --save-dev electron-rebuild
   http://electron.atom.io/docs/tutorial/using-native-node-modules/

CSS libraries
   npm install bootstrap@3
   npm install materialize-css
   npm install bulma --save


electron-packager
# for use in npm scripts
npm install electron-packager --save-dev
# for use from cli
npm install electron-packager -g
Running electron packager
electron-packager <sourcedir> <appname> --platform=<platform> --arch=<arch> [optional flags...]
<!-- https://github.com/electron-userland/electron-packager -->
<!-- /*app-version >>> platform added for electron-packager*/ -->
<!-- "app-version": "pkg.version",
"arch": "x64",
"asar": true,
"dir": "path.join(__dirname, ""../app')",
"icon": "path.join(__dirname, '../app/icons/icon')",
"ignore": "/node_modules|src|main.html/",
"name": "pkg.name",
"out": "path.join(__dirname, '../builds')",
"overwrite": true,
"platform": "all" -->
Building for all platforms
npm run build

Cleaning
Delete all builds from builds
npm run build:clean



Prototype Builds

Mock REST API: JSON Server
      JSON Server is a Node module, running an Express server, that let's you specify a JSON file to act as a data source for your mock REST API
   npm install -g json-server
   <!-- create json file and seed with data -->
   json-server companies.json

HTTP Requests: Postman
   GET, POST, PUT, PATCH, and DELETE requests to the server for testing your prototype, straight out-of-the-box


Mock Data Source: Faker.js
      Generating Fake Data for testing
   npm install faker



d3.js

crossfilter
   Install dependencies:
      npm install
      npm install -g browserify uglify-js
      Test changes with npm test. Build with npm run build for use in the browser. You may also want to benchmark your changes with npm run benchmark.



App Build
vue-webpack
$ npm install -g vue-cli
$ vue init webpack app
$ cd app
$ npm install
$ npm run dev


Use ESLint to lint your code? Yes
? Pick an ESLint preset Standard
? Setup unit tests with Karma + Mocha?
e2e tests with Nightwatch?


RethinkDB
brew update && brew install rethinkdb
   javascript driver: npm install rethinkdb
   node.js driver: npm install rethinkdbdash



Feathers-RethinkDB
npm install feathers feathers-rest feathers-socketio feathers-rethinkdb rethinkdbdash body-parser




Fastdom: Eliminates layout thrashing by batching DOM read/write operations
FastDom works as a regulatory layer between your app/library and the DOM. By batching DOM access we avoid unnecessary document reflows and dramatically speed up layout performance.
npm install fastdom

D3
<script src="https://d3js.org/d3.v3.min.js" charset="utf-8"></script>
npm install http-server -g
http-server

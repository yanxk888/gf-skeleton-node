# gf-skeleton-node

广发node项目脚手架，提供开发工具（如代码分析，构建工具等）和建议的目录约束，同时提供各功能代码的书写建议
![nodei.co](https://nodei.co/npm/gf-skeleton-node.png?downloads=true&downloadRank=true&stars=true)

## 特性
[在 features.md 阅读](./features.md)

## 安装

`npm install --save gf-skeleton-node`


## 命令和脚本

 - **npm run readme** : `node-readme`
 - **npm run precommit** : `npm test`
 - **npm run prepush** : `npm-run-all lint test test:deps`
 - **npm run start** : `babel-node $npm_package_main`
 - **npm run dev** : `nodemon --exec babel-node -- $npm_package_main`
 - **npm run debug** : `babel-node-debug $npm_package_main`
 - **npm run lint** : `xo`
 - **npm run format** : `xo --fix`
 - **npm run inspect** : `jsinspect`
 - **npm run test** : `lab`
 - **npm run coverage** : `lab -r lcov`
 - **npm run build** : `nar create --executable`
 - **npm run deps:sec** : `nsp audit-package`
 - **npm run deps:updates** : `david`
 - **npm run test:deps** : `npm-run-all deps:sec deps:updates`
 - **npm run patch** : `npm version patch && npm publish`
 - **npm run minor** : `npm version minor && npm publish`
 - **npm run major** : `npm version major && npm publish`
 - **npm run postpublish** : `git push origin master --follow-tags`


## 贡献

Contributions welcome; Please submit all pull requests against the master branch. If your pull request contains JavaScript patches or features, you should include relevant unit tests. Please check the [Contributing Guidelines](contributng.md) for more details. Thanks!

## 作者

sivagao <undefined> http://github.com/gaohailang

## 依赖

Package | Version | Dev
--- |:---:|:---:
[async](https://www.npmjs.com/package/async) | ^1.5.0 | ✖
[babel-register](https://www.npmjs.com/package/babel-register) | ^6.3.13 | ✖
[construx](https://www.npmjs.com/package/construx) | ^1.0.0 | ✖
[construx-copier](https://www.npmjs.com/package/construx-copier) | ^1.0.0 | ✖
[debug](https://www.npmjs.com/package/debug) | ^2.2.0 | ✖
[express](https://www.npmjs.com/package/express) | ^4.12.2 | ✖
[express-validator](https://www.npmjs.com/package/express-validator) | ^2.18.0 | ✖
[kraken-js](https://www.npmjs.com/package/kraken-js) | ^1.0.3 | ✖
[lodash](https://www.npmjs.com/package/lodash) | ^3.10.1 | ✖
[node-env-file](https://www.npmjs.com/package/node-env-file) | ^0.1.8 | ✖
[request](https://www.npmjs.com/package/request) | ^2.67.0 | ✖
[babel-node-debug](https://www.npmjs.com/package/babel-node-debug) | ^1.3.0 | ✔
[david](https://www.npmjs.com/package/david) | ^6.4.0 | ✔
[husky](https://www.npmjs.com/package/husky) | ^0.10.1 | ✔
[jsinspect](https://www.npmjs.com/package/jsinspect) | ^0.7.0 | ✔
[lab](https://www.npmjs.com/package/lab) | ^7.0.0 | ✔
[nar](https://www.npmjs.com/package/nar) | ^0.3.20 | ✔
[node-readme](https://www.npmjs.com/package/node-readme) | ^0.1.9 | ✔
[nodemon](https://www.npmjs.com/package/nodemon) | ^1.8.0 | ✔
[npm-run-all](https://www.npmjs.com/package/npm-run-all) | ^1.2.12 | ✔
[nsp](https://www.npmjs.com/package/nsp) | ^1.1.0 | ✔
[xo](https://www.npmjs.com/package/xo) | ^0.10.1 | ✔
[babel-preset-es2015](https://www.npmjs.com/package/babel-preset-es2015) | ^6.3.13 | ✔
[mocha](https://www.npmjs.com/package/mocha) | ^1.18.0 | ✔
[supertest](https://www.npmjs.com/package/supertest) | ^0.9.0 | ✔


## 授权

 - **ISC** : http://opensource.org/licenses/ISC

## 状态
广发node项目脚手架，提供开发工具（如代码分析，构建工具等）和建议的目录约束，同时提供各功能代码的书写建议

![nodei.co](https://nodei.co/npm/gf-skeleton-node.png?downloads=true&downloadRank=true&stars=true)

![npm](https://img.shields.io/npm/v/gf-skeleton-node.svg) ![github-issues](https://img.shields.io/github/issues/gf-rd/gf-skeleton-node.svg) ![stars](https://img.shields.io/github/stars/gf-rd/gf-skeleton-node.svg) ![forks](https://img.shields.io/github/forks/gf-rd/gf-skeleton-node.svg)

![travis-status](https://img.shields.io/travis/gf-rd/gf-skeleton-node.svg) ![license](https://img.shields.io/npm/l/gf-skeleton-node.svg) ![Circle CI build status](https://circleci.com/gh/gf-rd/gf-skeleton-node.svg?style=svg)

![](https://david-dm.org/gf-rd/gf-skeleton-node/status.svg)
![](https://david-dm.org/gf-rd/gf-skeleton-node/dev-status.svg)
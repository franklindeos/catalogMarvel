# CatalogoMarvel

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## API Marvel

1) Pick an API Endpoint. eg: https://gateway.marvel.com:443/v1/public/characters
2) Use a query value for ts. ts could be timestamp or any long string. eg: ts=thesoer
3) Generate a MD5 hash of ts+privatekey+publickey through code or preferrably online. eg: md5(ts + privKey + pubKey) For md5 hash: http://www.md5.cz/
4) Join the dots. URL?ts=val&apikey=key&hash=md5Hash. eg. https://gateway.marvel.com:443/v1/public/characters?ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b

Your public key
a4fb0685a6b2430b54f97ddd3fb28327

Your private key
17c08017bf335bb2e63caa73d00b13ae239fecee

ts=1595465805&apikey=a4fb0685a6b2430b54f97ddd3fb28327&hash=18cb2dcdb4b5902ea2d1dfd9d71946fb

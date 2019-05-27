# serverless-typescript-template

This project is a serverless template that allow you to start a simple http api with these features included:
- serverless **offline** cli and plugin
- inversion of control(with **inversify**)
- typescript transpilation (**webpack + watcher**)
- **unit test** with mocha/chai/nyc(for test coverage)
- **tslint**

Basicly i didn't want to redo the setup(test/tslint etc..) every time i build a new service so this template should fasten the setup a bit.

## How to

just:

    $ serverless create --template-url https://github.com/andrea-lascola/serverless-typescript-template.git --path myService

    $ cd myService && npm i

after that you can:

    $ npm start // start the service with hot reload -> curl http://localhost:3000/test

    $ npm test // run unittests with mocha/chai

    $ npm run coverage && open coverage/index.html // open coverage report




### TODO
* add cli command for tslint
* add dependency for logger / performance
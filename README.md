## pg-nest-api
## Nest Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
- It is currently the fastest-growing Node.js framework in TypeScript.

## Links
## applink
-  https://pg-nest-api.herokuapp.com/

## hosted app on heroku 
- https://pg-nest-api.herokuapp.com/quest

## Source link to GitHub Repo
- https://github.com/GUNDUPOOJA/pg-nest-api

## RESTful API

- RESTful API is an architectural style for an application program interface (API) that uses HTTP requests to access and use data. That data can be used to GET, PUT, POST and DELETE data types, which refers to the reading, updating, creating and deleting of operations concerning resources.


## Building blocks of nest.js
- Modules: Used to organize the code,some Typescript files uses @Module decorator that provides the metadata, which nest uses to organize the application structure.
- Providers : They are also called services, used for the abstraction of complexity and logic. The providers are inserted into controllers or other providers.
- Controllers : Used for handling the requests and providing the appropriate responses.

## What is Typescript?

- TypeScript is used to develop JavaScript applications for both client-side and server-side execution (as with Node.js or Deno).
- TypeScript introduced a great deal of syntax taken from object-oriented programming, including but not limited to:
- interfaces,
- classes,
- enumerated types,
- generics,
- modules.

- For each new resource, there's a module with a controller that handles requests by calling a service.  
- There's also an interface - and a dto - a data transfer object. When you call a POST (or PUT) command, you need to provide a package with your request.  That's wrapped up nicely in a read-only 'data transfer object' - one for each unique package needed. 

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Resources
- https://docs.nestjs.com/providers
- https://docs.nestjs.com/modules
- https://nwmissouri.instructure.com/courses/35916/discussion_topics/242155

## Why is DI so popular? (Hint: passing objects into functions makes it easy to test those functions.)


## Stay in touch
- Website - [https://nestjs.com](https://nestjs.com/)

## License

Nest is [MIT licensed](LICENSE).


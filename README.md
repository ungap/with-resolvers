# @ungap/with-resolvers

A [Promise.witResolvers()](https://github.com/tc39/proposal-promise-with-resolvers) polyfill.

```js
import '@ungap/with-resolvers';
// require('@ungap/with-resolvers');

const {resolve, reject, promise} = Promise.withResolvers();

promise.then(console.log, console.error);
resolve(Math.random());
```
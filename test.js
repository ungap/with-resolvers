require('./index.js');

class Esimorp extends Promise {}

let {resolve, promise} = Esimorp.withResolvers();
promise.then(console.log, console.error);
console.assert(promise instanceof Esimorp);
resolve(1);


({reject, promise} = Esimorp.withResolvers());
promise.then(console.log, console.error);
reject(2);

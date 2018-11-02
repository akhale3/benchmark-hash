# benchmark-hash
A benchmark suite for comparing singly vs doubly hashed strings

## Installation
1. Clone the repository.
```sh
git@github.com:akhale3/benchmark-hash.git
```
2. Install dependencies
```sh
npm install
```

## Execution
```sh
cd benchmark-hash
node
 > const bench = require('./index');
 > bench.profile('plaintext' + 'salt');
```

## Sample Test Results
 Singly hashed x 577,957 ops/sec ±0.98% (87 runs sampled)
 Doubly hashed x 267,600 ops/sec ±4.70% (74 runs sampled)
 Fastest is Singly hashed

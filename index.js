'use strict';

const Benchmark = require('benchmark');
const crypto = require('crypto');

const profile = plaintext => {
  const suite = new Benchmark.Suite;

  suite.add('Singly hashed', () => {
    const hash = crypto.createHash('sha256');
    hash.update(plaintext).digest('hex');
  })
  .add('Doubly hashed', () => {
    const firstHash = crypto.createHash('sha256');
    const secondHash = crypto.createHash('sha256');

    secondHash.update(firstHash.update(plaintext).digest('hex')).digest('hex');
  })
  .on('cycle', event => {
    console.log(String(event.target));
  })
  .on('complete', () => {
    console.log(`Fastest is ${suite.filter('fastest').map('name')}`);
  })
  .run({
    async: true
  });
};

exports.profile = profile;

// Test Results
//
// Run 1:
// Singly hashed x 577,957 ops/sec ±0.98% (87 runs sampled)
// Doubly hashed x 267,600 ops/sec ±4.70% (74 runs sampled)
// Fastest is Singly hashed
//
// Run 2:
// Singly hashed x 576,507 ops/sec ±0.97% (80 runs sampled)
// Doubly hashed x 258,696 ops/sec ±6.30% (71 runs sampled)
// Fastest is Singly hashed

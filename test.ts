import { assertEquals } from 'https://deno.land/std@0.95.0/testing/asserts.ts';
import { merkleize, split } from './main.ts';

Deno.test('Merkle Hash "hello"', () => {
  assertEquals(merkleize(split('hello')), '286d189fda11bf4e906b6973a173009f47ede16532f1bae726223f8ee155d73b');
});

Deno.test('Merkle Hash "hello world"', () => {
  assertEquals(merkleize(split('hello world')), '15e178b71fae8849ee562c9cc0d7ea322fba6cd495411329d47234479167cc8b');
});

Deno.test('Merkle Hash 3-word sentence', () => {
  assertEquals(merkleize(split('Oh joyous day!')), '8cdef28490af36dedf88eb946dbfd7f0db20be3a6d4784226b38042b7e64672f');
});

Deno.test('Merkle Hash 8-word sentence', () => {
  assertEquals(merkleize(split('I write this sitting in the kitchen sink.')), '7b688bc59bd9dcb9c07739cd48d2cdf7857430e0892fdab4c5270bd1656e5f99');
});

Deno.test('Merkle Hash 14-word sentence', () => {
  assertEquals(merkleize(split('It was a bright cold day in April, and the clocks were striking thirteen.')), '08c4db067797c57a10f461aedef909d13a84ee87e2773ab1a11e3e838f16e7c9');
});

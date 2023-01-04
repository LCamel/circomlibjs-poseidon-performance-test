import { poseidon } from "circomlibjs";
import { performance } from 'node:perf_hooks';

const t0 = performance.now();
for (let i = 0; i < 10000; i++) {
    poseidon([1, 2]);
}
const t1 = performance.now();

console.log(t1 - t0);

import { buildPoseidon } from "circomlibjs";
import { performance } from 'node:perf_hooks';

const poseidon = await buildPoseidon();

console.log(poseidon([1, 2]));

const t0 = performance.now();
for (let i = 0; i < 10000; i++) {
    poseidon([1, 2]);
}
const t1 = performance.now();

console.log("t1 - t0: ", t1 - t0);





/*
const F = poseidon.F;
const a = poseidon([1, 2]);
const a1 = F.e(a);
console.log(a1);
const a2 = F.e(7853200120776062878684798364095072458815029376092732009249414926327459813530n);
console.log(a2);
*/


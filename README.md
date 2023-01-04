Test poseidon() from different versions of circomlibjs.

```
% (cd 0.0.8; npm install; time node 0.0.8.mjs)

7853200120776062878684798364095072458815029376092732009249414926327459813530n
t1 - t0:  5662.9946980029345
node 0.0.8.mjs  6.78s user 0.10s system 105% cpu 6.543 total
```

```
(cd 0.1.7; npm install; time node 0.1.7.mjs)

Uint8Array(32) [
  118, 209,   3,  86, 76, 239, 241, 87,
  195,  18, 196,  88, 66, 229,  60, 78,
  197,  80,  33, 107, 96, 229, 152, 66,
   52,  14, 202,  53, 84,   7, 152,  9
]
t1 - t0:  934.9338679909706
node 0.1.7.mjs  2.22s user 0.19s system 106% cpu 2.270 total
```

# About AssemblyScript Template for ZKWASM

## Compile
```bash
asc test.ts -t test.wat -O --noAssert -o test.wasm --disable bulk-memory --use abort=sdk/zkwasm/abort
```

## Clean Bytes
Since the keyword `new` would introduces plenty of global init logic (about 1.8kb wasm), making it crash at setup stage or slow at prove stage, we provide a clean version of `Bytes` replacing `new` with `heap.alloc`.

## read_bytes support
in `sdk/zkwasm`, there's read_bytes_from_u64 that tested to be working on zkwasm
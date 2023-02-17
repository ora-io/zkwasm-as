import { wasm_public_input, wasm_private_input, require, read_bytes_from_u64 } from "./sdk/zkwasm";
import { Bytes } from "./sdk/type";

export function zkmain():void{
    // b[0]=0x12;
    var blen = wasm_public_input() as i32;
    var bytes = Bytes.new(blen);
    read_bytes_from_u64(bytes, blen);
    var idx = wasm_public_input() as i32;
    var val = wasm_public_input() as u8;
    require(val == bytes[idx]);
}
// passed prove task: 0x04:i64 0x12345678:bytes-packed 0x00:i64 0x12:i64
// passed prove task: 0x0a:i64 0x123456780a0b0c0d0e0f:bytes-packed 0x08:i64 0x0e:i64
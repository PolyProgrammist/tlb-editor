import { Cell } from "@ton/core";

export function fromBase64(base64: string, loadFunction: any) {
    let cell = Cell.fromBase64(base64)
    return cell;
}
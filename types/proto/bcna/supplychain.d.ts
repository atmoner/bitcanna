import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
export interface Supplychain {
    id: Long;
    product: string;
    info: string;
    supplyinfo: string;
    creator: string;
}
export declare const Supplychain: {
    encode(message: Supplychain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Supplychain;
    fromJSON(object: any): Supplychain;
    toJSON(message: Supplychain): unknown;
    fromPartial<I extends {
        id?: any;
        product?: string;
        info?: string;
        supplyinfo?: string;
        creator?: string;
    } & {
        id?: any;
        product?: string;
        info?: string;
        supplyinfo?: string;
        creator?: string;
    } & Record<Exclude<keyof I, keyof Supplychain>, never>>(object: I): Supplychain;
};

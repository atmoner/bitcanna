import { LCDClient } from "@osmonauts/lcd";
import { QueryAccountsRequest, QueryAccountsResponse, QueryAccountRequest, QueryAccountResponse, QueryParamsRequest, QueryParamsResponse, QueryModuleAccountsRequest, QueryModuleAccountsResponse, Bech32PrefixRequest, Bech32PrefixResponse, AddressBytesToStringRequest, AddressBytesToStringResponse, AddressStringToBytesRequest, AddressStringToBytesResponse } from "./query";
export declare class QueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: any;
    });
    accounts(params: QueryAccountsRequest): Promise<QueryAccountsResponse>;
    account(params: QueryAccountRequest): Promise<QueryAccountResponse>;
    params(params: QueryParamsRequest): Promise<QueryParamsResponse>;
    moduleAccounts(params: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponse>;
    bech32Prefix(params: Bech32PrefixRequest): Promise<Bech32PrefixResponse>;
    addressBytesToString(params: AddressBytesToStringRequest): Promise<AddressBytesToStringResponse>;
    addressStringToBytes(params: AddressStringToBytesRequest): Promise<AddressStringToBytesResponse>;
}

import { Notifier, Ledger, JSON } from '@klave/sdk';
// import { FetchInput, FetchOutput, StoreInput, StoreOutput, ErrorMessage } from './types';

// const myTableName = "my_storage_table";

/**
 * @query
 * @param {FetchInput} input - A parsed input argument
 */
export function fetchValue(input: string): void {

    let value = Ledger.getTable('myTableName').get(input);
    // Notifier.sendJson<string>()

}
@serializable
export class Input{
    key!: string;
    value!: string;
}

/**
 * @transaction
//  * param {StoreInput} input - A parsed input argument
 */
export function storeValue(input: Input): void {

    if (input.key && input.value) {
        Ledger.getTable('myTableName').set(input.key, input.value);
        Notifier.sendJson<string>(`key ${input.key} and value ${input.value} inserted`);
    }

}

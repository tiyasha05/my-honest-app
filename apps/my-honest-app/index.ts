import { Notifier, Ledger, JSON } from '@klave/sdk';
// import { FetchInput, FetchOutput, StoreInput, StoreOutput, ErrorMessage } from './types';

// const myTableName = "my_storage_table";
@serializable
export class ErrorMessage {
    success!: boolean;
    message!: string;
}
/**
 * @query
 */
export function fetchValue(input: string): void {

    let value = Ledger.getTable('myTableName').get(input);
    if (value.length === 0) {
        Notifier.sendJson<ErrorMessage>({
            success: false,
            message: `key not found in table`
        });
    }
    // Notifier.sendJson<string>()

}
@serializable
export class Input{
    key!: string;
    value!: string;
}

/**
 * @transaction
 */
export function storeValue(input: Input): void {

    if (input.key && input.value) {
        Ledger.getTable('myTableName').set(input.key, input.value);
        Notifier.sendJson<string>(`key ${input.key} and value ${input.value} inserted`);
    }

}

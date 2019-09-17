declare module 'ledger-polkadot' {
  import Transport from '@ledgerhq/hw-transport';

  export interface ResponseBase {
    error_message: string;
    return_code: number;
  }

  export interface ReponseAddress extends ResponseBase {
    address: string;
    pubKey: string;
  }

  export interface ResponseVersion extends ResponseBase {
    device_locked: boolean;
    major: number;
    minor: number;
    patch: number;
    test_mode: boolean;
  }

  export interface ResponseSign extends ResponseBase {
    signature: string;
  }

  declare class LedgerApp {
    constructor (transport: Transport, scrambleKey?: string);

    getVersion (): Promise<ResponseVersion>;
    getAddress (account: number, change: number, addressIndex: number, requireConfirmation?: boolean): Promise<ResponseAddress>;
    signSendChunk (chunkIdx: number, chunkNum: number, chunk: Buffer): Promise<ResponseSign>;
    sign (account: number, change: number, addressIndex: number, message: Buffer): Promise<ResponseSign>;
  }

  export default LedgerApp;
}

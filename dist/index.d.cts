interface ClientOptions {
    baseURL: string;
}
declare class CloudStorage {
    private readonly fileServiceClient;
    private readonly cloudStorageClient;
    constructor(options: ClientOptions);
    saveFile(readable: ReadableStream): Promise<void>;
    getFile(id: string): Promise<void>;
    updateFile(id: string, readable: ReadableStream): Promise<void>;
}

export { type ClientOptions, CloudStorage };

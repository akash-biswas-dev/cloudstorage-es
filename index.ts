import { createConnectTransport } from "@connectrpc/connect-web";
import { FileService } from "./gen/cloudstorage/v1/file_service_pb";
import { CloudStorageService } from "./gen/cloudstorage/v1/cloudstorage_service_pb";
import { Client, createClient } from "@connectrpc/connect";

export interface ClientOptions {
  baseURL: string;
}

export class CloudStorage {
  private readonly fileServiceClient;
  private readonly cloudStorageClient;

  constructor(options: ClientOptions) {
    const transport = createConnectTransport({
      baseUrl: options.baseURL,
    });

    this.fileServiceClient = createClient(FileService, transport);
    this.cloudStorageClient = createClient(CloudStorageService, transport);
  }

  async saveFile(readable: ReadableStream) {}

  async getFile(id: string) {}

  async updateFile(id: string, readable: ReadableStream) {}
}

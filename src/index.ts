import { createConnectTransport } from "@connectrpc/connect-web";
import {
  FileService,
  SaveFileRequest,
  SaveFileRequestSchema,
} from "./gen/cloudstorage/v1/file_service_pb";
import { CloudStorageService } from "./gen/cloudstorage/v1/cloudstorage_service_pb";
import { Client, createClient } from "@connectrpc/connect";
import { create } from "@bufbuild/protobuf";

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

  async saveFile(readBytes:) {
    // The generator function which generate the bytes.

    async function* generator(
      reader: ReadableStreamDefaultReader,
    ): AsyncIterable<SaveFileRequest> {
      const { done, value } = await reader.read();

      if (done) return;

      yield create(SaveFileRequestSchema, {
        data: value,
      });
    }
    // this.fileServiceClient.saveFile(generator(reader));
    while (true) {
      const req = generator(reader);
      if (!req) break;
      console.log(req);
    }
  }

  async getFile(id: string) {}

  async updateFile(id: string, readable: ReadableStream) {}
}

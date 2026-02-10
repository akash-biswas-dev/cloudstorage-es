import { create } from "@bufbuild/protobuf";
import { createClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";
import { ReadStream } from "node:fs";
import { CloudStorageService } from "./gen/cloudstorage/v1/cloudstorage_service_pb";
import {
  FileService,
  SaveFileRequest,
  SaveFileRequestSchema,
} from "./gen/cloudstorage/v1/file_service_pb";

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

  async saveFile(stream: ReadStream) {
    // The generator function which generate the bytes.

    async function* generator(): AsyncIterable<SaveFileRequest> {
      for await (const chunk of stream) {
        if (chunk === null) return;
        yield create(SaveFileRequestSchema, {
          data: chunk,
        });
      }
    }
    // this.fileServiceClient.saveFile(generator(reader));
    while (true) {
      const req = generator();
      if (!req) break;
      console.log(req);
    }
  }

  async getFile(id: string) {}

  async updateFile(id: string, readable: ReadableStream) {}
}

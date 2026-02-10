"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  CloudStorage: () => CloudStorage
});
module.exports = __toCommonJS(index_exports);
var import_connect_web = require("@connectrpc/connect-web");

// src/gen/cloudstorage/v1/file_service_pb.js
var import_codegenv22 = require("@bufbuild/protobuf/codegenv2");

// src/gen/cloudstorage/v1/types/v1/files_pb.js
var import_codegenv2 = require("@bufbuild/protobuf/codegenv2");
var file_cloudstorage_v1_types_v1_files = /* @__PURE__ */ (0, import_codegenv2.fileDesc)("CiRjbG91ZHN0b3JhZ2UvdjEvdHlwZXMvdjEvZmlsZXMucHJvdG8SGGNsb3Vkc3RvcmFnZS52MS50eXBlcy52MSKZAQoOT2JqZWN0TWV0YWRhdGESOQoLb2JqZWN0X3R5cGUYASABKA4yJC5jbG91ZHN0b3JhZ2UudjEudHlwZXMudjEuT2JqZWN0VHlwZRI5CgthY2Nlc3NfdHlwZRgCIAEoDjIkLmNsb3Vkc3RvcmFnZS52MS50eXBlcy52MS5BY2Nlc3NUeXBlEhEKCW9iamVjdF9pZBgEIAEoCSJgChBPYmplY3RBY2Nlc3NJbmZvEhEKCW9iamVjdF9pZBgBIAEoCRI5CgthY2Nlc3NfdHlwZRgCIAEoDjIkLmNsb3Vkc3RvcmFnZS52MS50eXBlcy52MS5BY2Nlc3NUeXBlIukBCg1PYmplY3REZXRhaWxzEjkKC29iamVjdF90eXBlGAEgASgOMiQuY2xvdWRzdG9yYWdlLnYxLnR5cGVzLnYxLk9iamVjdFR5cGUSEQoJb2JqZWN0X2lkGAIgASgJEhMKC29iamVjdF9zaXplGAMgASgEEjkKC2FjY2Vzc190eXBlGAQgASgOMiQuY2xvdWRzdG9yYWdlLnYxLnR5cGVzLnYxLkFjY2Vzc1R5cGUSEgoKY3JlYXRlZF9vbhgFIAEoCRIXCgphY2Nlc3NfdXJsGAYgASgJSACIAQFCDQoLX2FjY2Vzc191cmwqWgoKT2JqZWN0VHlwZRIbChdPQkpFQ1RfVFlQRV9VTlNQRUNJRklFRBAAEhQKEE9CSkVDVF9UWVBFX0ZJTEUQARIZChVPQkpFQ1RfVFlQRV9ESVJFQ1RPUlkQAipaCgpBY2Nlc3NUeXBlEhsKF0FDQ0VTU19UWVBFX1VOU1BFQ0lGSUVEEAASFwoTQUNDRVNTX1RZUEVfUFJJVkFURRABEhYKEkFDQ0VTU19UWVBFX1BVQkxJQxACQq0BChxjb20uY2xvdWRzdG9yYWdlLnYxLnR5cGVzLnYxQgpGaWxlc1Byb3RvUAGiAgNDVlSqAhhDbG91ZHN0b3JhZ2UuVjEuVHlwZXMuVjHKAhhDbG91ZHN0b3JhZ2VcVjFcVHlwZXNcVjHiAiRDbG91ZHN0b3JhZ2VcVjFcVHlwZXNcVjFcR1BCTWV0YWRhdGHqAhtDbG91ZHN0b3JhZ2U6OlYxOjpUeXBlczo6VjFiBnByb3RvMw");

// src/gen/cloudstorage/v1/file_service_pb.js
var file_cloudstorage_v1_file_service = /* @__PURE__ */ (0, import_codegenv22.fileDesc)("CiJjbG91ZHN0b3JhZ2UvdjEvZmlsZV9zZXJ2aWNlLnByb3RvEg9jbG91ZHN0b3JhZ2UudjEiHwoPU2F2ZUZpbGVSZXF1ZXN0EgwKBGRhdGEYASABKAwiegoQU2F2ZUZpbGVSZXNwb25zZRIXCg1lcnJvcl9tZXNzYWdlGAIgASgJSAASQQoOb2JqZWN0X2RldGFpbHMYAyABKAsyJy5jbG91ZHN0b3JhZ2UudjEudHlwZXMudjEuT2JqZWN0RGV0YWlsc0gAQgoKCHJlc3BvbnNlIiMKDkdldEZpbGVSZXF1ZXN0EhEKCW9iamVjdF9pZBgBIAEoCSIfCg9HZXRGaWxlUmVzcG9uc2USDAoEZGF0YRgBIAEoDCIhChFVcGRhdGVGaWxlUmVxdWVzdBIMCgRkYXRhGAEgASgMInwKElVwZGF0ZUZpbGVSZXNwb25zZRIXCg1lcnJvcl9tZXNzYWdlGAIgASgJSAASQQoOb2JqZWN0X2RldGFpbHMYAyABKAsyJy5jbG91ZHN0b3JhZ2UudjEudHlwZXMudjEuT2JqZWN0RGV0YWlsc0gAQgoKCHJlc3BvbnNlKkcKBlN0YXR1cxIWChJTVEFUVVNfVU5TUEVDSUZJRUQQABIRCg1TVEFUVVNfRkFJTEVEEAESEgoOU1RBVFVTX1NVQ0NFU1MQAjKJAgoLRmlsZVNlcnZpY2USUQoIU2F2ZUZpbGUSIC5jbG91ZHN0b3JhZ2UudjEuU2F2ZUZpbGVSZXF1ZXN0GiEuY2xvdWRzdG9yYWdlLnYxLlNhdmVGaWxlUmVzcG9uc2UoARJOCgdHZXRGaWxlEh8uY2xvdWRzdG9yYWdlLnYxLkdldEZpbGVSZXF1ZXN0GiAuY2xvdWRzdG9yYWdlLnYxLkdldEZpbGVSZXNwb25zZTABElcKClVwZGF0ZUZpbGUSIi5jbG91ZHN0b3JhZ2UudjEuVXBkYXRlRmlsZVJlcXVlc3QaIy5jbG91ZHN0b3JhZ2UudjEuVXBkYXRlRmlsZVJlc3BvbnNlKAFChAEKE2NvbS5jbG91ZHN0b3JhZ2UudjFCEEZpbGVTZXJ2aWNlUHJvdG9QAaICA0NYWKoCD0Nsb3Vkc3RvcmFnZS5WMcoCD0Nsb3Vkc3RvcmFnZVxWMeICG0Nsb3Vkc3RvcmFnZVxWMVxHUEJNZXRhZGF0YeoCEENsb3Vkc3RvcmFnZTo6VjFiBnByb3RvMw", [file_cloudstorage_v1_types_v1_files]);
var SaveFileRequestSchema = /* @__PURE__ */ (0, import_codegenv22.messageDesc)(file_cloudstorage_v1_file_service, 0);
var FileService = /* @__PURE__ */ (0, import_codegenv22.serviceDesc)(file_cloudstorage_v1_file_service, 0);

// src/gen/cloudstorage/v1/cloudstorage_service_pb.js
var import_codegenv23 = require("@bufbuild/protobuf/codegenv2");
var file_cloudstorage_v1_cloudstorage_service = /* @__PURE__ */ (0, import_codegenv23.fileDesc)("CipjbG91ZHN0b3JhZ2UvdjEvY2xvdWRzdG9yYWdlX3NlcnZpY2UucHJvdG8SD2Nsb3Vkc3RvcmFnZS52MSIoChNEZWxldGVPYmplY3RSZXF1ZXN0EhEKCW9iamVjdF9pZBgBIAMoCSIpChREZWxldGVPYmplY3RSZXNwb25zZRIRCglvYmplY3RfaWQYASADKAkiYQoXVXBkYXRlQWNjZXNzVHlwZVJlcXVlc3QSRgoSb2JqZWN0X2FjY2Vzc19pbmZvGAEgAygLMiouY2xvdWRzdG9yYWdlLnYxLnR5cGVzLnYxLk9iamVjdEFjY2Vzc0luZm8iYgoYVXBkYXRlQWNjZXNzVHlwZVJlc3BvbnNlEkYKEm9iamVjdF9hY2Nlc3NfaW5mbxgBIAMoCzIqLmNsb3Vkc3RvcmFnZS52MS50eXBlcy52MS5PYmplY3RBY2Nlc3NJbmZvIqUBChpHZXREaXJlY3RvcnlDb250ZW50UmVxdWVzdBIRCglvYmplY3RfaWQYASABKAkSOQoLYWNjZXNzX3R5cGUYAiABKA4yJC5jbG91ZHN0b3JhZ2UudjEudHlwZXMudjEuQWNjZXNzVHlwZRI5CgtvYmplY3RfdHlwZRgDIAEoDjIkLmNsb3Vkc3RvcmFnZS52MS50eXBlcy52MS5PYmplY3RUeXBlIlcKG0dldERpcmVjdG9yeUNvbnRlbnRSZXNwb25zZRI4CgdvYmplY3RzGAEgASgLMicuY2xvdWRzdG9yYWdlLnYxLnR5cGVzLnYxLk9iamVjdERldGFpbHMiKgoVSXNPYmplY3RFeGlzdHNSZXF1ZXN0EhEKCW9iamVjdF9pZBgBIAEoCSJhChZJc09iamVjdEV4aXN0c1Jlc3BvbnNlEjwKBm9iamVjdBgBIAEoCzInLmNsb3Vkc3RvcmFnZS52MS50eXBlcy52MS5PYmplY3REZXRhaWxzSACIAQFCCQoHX29iamVjdCIvChhGaW5kT2JqZWN0c0J5TmFtZVJlcXVlc3QSEwoLb2JqZWN0X25hbWUYASABKAkiVQoZRmluZE9iamVjdHNCeU5hbWVSZXNwb25zZRI4CgdvYmplY3RzGAEgASgLMicuY2xvdWRzdG9yYWdlLnYxLnR5cGVzLnYxLk9iamVjdERldGFpbHMyoAQKE0Nsb3VkU3RvcmFnZVNlcnZpY2USZwoQVXBkYXRlQWNjZXNzVHlwZRIoLmNsb3Vkc3RvcmFnZS52MS5VcGRhdGVBY2Nlc3NUeXBlUmVxdWVzdBopLmNsb3Vkc3RvcmFnZS52MS5VcGRhdGVBY2Nlc3NUeXBlUmVzcG9uc2USWwoMRGVsZXRlT2JqZWN0EiQuY2xvdWRzdG9yYWdlLnYxLkRlbGV0ZU9iamVjdFJlcXVlc3QaJS5jbG91ZHN0b3JhZ2UudjEuRGVsZXRlT2JqZWN0UmVzcG9uc2UScgoTR2V0RGlyZWN0b3J5Q29udGVudBIrLmNsb3Vkc3RvcmFnZS52MS5HZXREaXJlY3RvcnlDb250ZW50UmVxdWVzdBosLmNsb3Vkc3RvcmFnZS52MS5HZXREaXJlY3RvcnlDb250ZW50UmVzcG9uc2UwARJhCg5Jc09iamVjdEV4aXN0cxImLmNsb3Vkc3RvcmFnZS52MS5Jc09iamVjdEV4aXN0c1JlcXVlc3QaJy5jbG91ZHN0b3JhZ2UudjEuSXNPYmplY3RFeGlzdHNSZXNwb25zZRJsChFGaW5kT2JqZWN0c0J5TmFtZRIpLmNsb3Vkc3RvcmFnZS52MS5GaW5kT2JqZWN0c0J5TmFtZVJlcXVlc3QaKi5jbG91ZHN0b3JhZ2UudjEuRmluZE9iamVjdHNCeU5hbWVSZXNwb25zZTABQowBChNjb20uY2xvdWRzdG9yYWdlLnYxQhhDbG91ZHN0b3JhZ2VTZXJ2aWNlUHJvdG9QAaICA0NYWKoCD0Nsb3Vkc3RvcmFnZS5WMcoCD0Nsb3Vkc3RvcmFnZVxWMeICG0Nsb3Vkc3RvcmFnZVxWMVxHUEJNZXRhZGF0YeoCEENsb3Vkc3RvcmFnZTo6VjFiBnByb3RvMw", [file_cloudstorage_v1_types_v1_files]);
var CloudStorageService = /* @__PURE__ */ (0, import_codegenv23.serviceDesc)(file_cloudstorage_v1_cloudstorage_service, 0);

// src/index.ts
var import_connect = require("@connectrpc/connect");
var import_protobuf = require("@bufbuild/protobuf");
var CloudStorage = class {
  constructor(options) {
    const transport = (0, import_connect_web.createConnectTransport)({
      baseUrl: options.baseURL
    });
    this.fileServiceClient = (0, import_connect.createClient)(FileService, transport);
    this.cloudStorageClient = (0, import_connect.createClient)(CloudStorageService, transport);
  }
  async saveFile(readBytes) {
    const reader = readBytes.getReader();
    async function* generator(reader2) {
      const { done, value } = await reader2.read();
      if (done) return;
      yield (0, import_protobuf.create)(SaveFileRequestSchema, {
        data: value
      });
    }
    while (true) {
      const req = generator(reader);
      if (!req) break;
      console.log(req);
    }
  }
  async getFile(id) {
  }
  async updateFile(id, readable) {
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CloudStorage
});

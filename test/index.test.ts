import { CloudStorage } from "../src/index";
import fs from "fs";
import path from "path";

// Load test file in the context.
const filePath = path.resolve(process.cwd(), "test-image.avif");
const stream = fs.createReadStream(filePath);

describe("class CloudStorageWeb { } ", () => {
  it("The file should stream.", () => {
    const cloudStorageClient = new CloudStorage({ baseURL: "localhost:5000" });
    while (true) {
      const buffer = stream.();

    }
  });
});

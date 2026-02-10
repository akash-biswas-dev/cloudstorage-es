import { CloudStorage } from "../src/index";
import fs, { read, ReadStream } from "fs";
import path from "path";

// Load test file in the context.
const filePath = path.resolve(process.cwd(), "test-image.avif");

describe("class CloudStorageWeb { } ", () => {
  it("The file should stream.", async () => {
    const stream: ReadStream = fs.createReadStream(filePath, {});

    const cs = new CloudStorage({ baseURL: "localhost:5000" });

    cs.saveFile(stream);
  });
});

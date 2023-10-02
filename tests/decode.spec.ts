import { encode } from "../src/encode";
import { decode } from "../src/decode";

describe("testing encode and decode functions", () => {
  test("decoding an encoded string should return the original string", () => {
    const originalString = "Hello world!!!";
    const encodedString = encode(originalString);
    const decodedString = decode(encodedString);

    expect(decodedString).toBe(originalString);
  });

  test("Decoding an encoded string with additional text should not return the original string", () => {
    const originalString = "Hello world!!!";
    const encodedString = encode(originalString) + "test  string";
    const decodedString = decode(encodedString);
    expect(decodedString).not.toBe(originalString);
  });
});

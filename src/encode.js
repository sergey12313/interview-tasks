/**
 * Encodes a given value using a specific algorithm.
 *
 * @param {string} value - The value to be encoded.
 * @return {string} The encoded value.
 */
export const encode = (value) =>
  [...value]
    .map((x, i) => [x.charCodeAt(0), i])
    .sort()
    .flatMap((x) => x)
    .join(".")
    .match(/./g)
    .flatMap((x, i) => new Array(x == "." ? 1 : 2 + x * 2).fill((1 + i) % 2))
    .join("")
    .replace(/(([01])\2*)/g, (x) => `${+x ? "." : "-"}${x.length}`);

/**
 * Decodes a value by performing a series of transformations.
 *
 * @param {string} value - The value to be decoded.
 * @return {string} - The decoded value.
 */
export const decode = (value: string): string =>
  String.fromCharCode(
    ...value
      .replace(/(?<token>[\.\-])(?<value>\d*)/g, (_, token, value) => {
        const count = +value;
        return token === "-"
          ? new Array(count).fill("0").join("")
          : new Array(count).fill("1").join("");
      })
      .split("")
      .reduce<Array<Array<string>>>((acc, cur) => {
        if (acc.length === 0 || acc[acc.length - 1][0] !== cur) {
          acc.push([cur]);
        } else {
          acc[acc.length - 1].push(cur);
        }
        return acc;
      }, [])
      .map((value) => {
        if (value.length === 1) {
          return ".";
        }
        return String((value.length - 2) / 2);
      })
      .join("")
      .split(".")
      .map(Number)
      .reduce<Array<[number, number]>>((acc, cur, index) => {
        if (index % 2 === 0) {
          acc.push([cur] as unknown as [number, number]);
        } else {
          acc[acc.length - 1].push(cur);
        }
        return acc;
      }, [])
      .sort((a, b) => a[1] - b[1])
      .map((value) => value[0])
  );

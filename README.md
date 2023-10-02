# Тестовое задание

## 1. Верстка
### Задача: дополнить scss правила так, чтобы представленная html разметка приобрела вид как на картинке.

https://codepen.io/sergey12313/pen/KKbxKRG



## 2. JS
### Задача: написать функцию `decode` в том же стиле, что и функция `encode` (вытянутой в цепочку) и узнать значение переменной `input`

[task2.ts](https://github.com/sergey12313/interview-tasks/blob/main/task2.ts)


```typescript
const decode = (value: string) =>
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

console.log(decode(decode(input))); //i love puzzles
```




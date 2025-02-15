export function extractJSON(input: string) {
  let startIndex = 0;

  while (startIndex < input.length) {
    const nextOpenBrace = input.indexOf("{", startIndex);
    const nextOpenBracket = input.indexOf("[", startIndex);
    let start = Math.min(
      nextOpenBrace === -1 ? Infinity : nextOpenBrace,
      nextOpenBracket === -1 ? Infinity : nextOpenBracket,
    );

    if (start === Infinity) {
      return { beforeJSON: input };
    }

    startIndex = start;
    let bracketCount = 0;
    let braceCount = 0;
    let inString = false;
    let escape = false;

    for (let i = startIndex; i < input.length; i++) {
      const char = input[i];

      if (escape) {
        escape = false;
        continue;
      }

      if (char === "\\") {
        escape = true;
        continue;
      }

      if (char === '"' && !escape) {
        inString = !inString;
        continue;
      }

      if (!inString) {
        if (char === "{") braceCount++;
        if (char === "}") braceCount--;
        if (char === "[") bracketCount++;
        if (char === "]") bracketCount--;

        if (
          braceCount === 0 &&
          bracketCount === 0 &&
          (input[startIndex] === "{" ? char === "}" : char === "]")
        ) {
          const candidate = input.substring(startIndex, i + 1);

          try {
            return {
              json: JSON.parse(candidate),
              beforeJSON: input.substring(0, startIndex),
              afterJSON: input.substring(i + 1),
            };
          } catch {}
        }
      }
    }
    startIndex++;
  }

  return { beforeJSON: input };
}

export const titleToId = (title: string) => {
  let result = "";
  for (const letter of title) {
    if (letter >= "A" && letter <= "z") {
      result += letter.toLowerCase();
    }

    if (letter === " ") {
      result += "-";
    }
  }
  return result;
};

function randomStringGenerator(lenght: number, alpha: string) {
  let chars: string[] = [];

  for (let i = 0; i < lenght; i++) {
    chars[i] = alpha[Math.floor(Math.random() * alpha.length)];
  }

  return chars.join("");
}

function randomStringsGenerator(
  elemsNum: number,
  wordLenght: number,
  alpha: string
) {
  let randomStrings: string[] = [];

  for (let i = 0; i < elemsNum; i++) {
    randomStrings[i] = randomStringGenerator(wordLenght, alpha);
  }

  return randomStrings;
}

console.log(randomStringsGenerator(10, 10, "abcdefghijs"))
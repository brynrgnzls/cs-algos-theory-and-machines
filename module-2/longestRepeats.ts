function longestCommonPrefix(s: string, t: string) {
  const n = Math.min(s.length, t.length);

  for (let i = 0; i < n; i++) {
    if (s.charAt(i) != t.charAt(i)) {
      return s.substring(0, i);
    }
  }

  return s.substring(0, n);
}

function lrsBruteForce(s: string) {
  let lrs = "";

  for (let i = 0; i < s.length; i++) {
    for (let j = 1 + i; j < s.length; j++) {
      let x = longestCommonPrefix(
        s.substring(i, s.length),
        s.substring(j, s.length)
      );
      if (x.length > lrs.length) lrs = x;
    }
  }
}

// Efficient

function merge(leftArr: string[], rightArr: string[]) {
  let lPointer = 0;
  let rPointer = 0;

  const mergedArr: string[] = [];

  while (rPointer < rightArr.length && lPointer < leftArr.length) {
    if (leftArr[lPointer].localeCompare(rightArr[rPointer]) === -1)
      mergedArr.push(leftArr[lPointer++]);
    else if (leftArr[lPointer].localeCompare(rightArr[rPointer]) === 1)
      mergedArr.push(rightArr[rPointer++]);
    else {
      mergedArr.push(rightArr[rPointer++]);
      mergedArr.push(leftArr[lPointer++]);
    }
  }

  return mergedArr
    .concat(leftArr.slice(lPointer))
    .concat(rightArr.slice(rPointer));
}

function mergeSort(str: string[]): string[] {
  if (str.length === 1) return str;

  const mid = Math.floor(str.length / 2);
  const left = str.slice(0, mid);
  const right = str.slice(mid + 1);

  return merge(mergeSort(left), mergeSort(right));
}

function suffixString(str: string) {
  const l = str.length;
  const suffixArr: string[] = [];

  for (let i = 0; i < l; i++) {
    suffixArr.push(str);
    str = str.slice(1);
  }

  return suffixArr;
}

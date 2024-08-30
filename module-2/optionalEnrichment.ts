// 4.2.4 Describe what happens if you apply binary search to an unordered array. Why shouldn't you check whether the array is sorted before each call to binary search? Could you check that the elements binary search examines are in ascending order? If so, would that check be effective?
// [ANSWER]: The Binary Search Algorithm only works if the array is sorted already either desc or asc, the algorithm will defenitely fail if the search is performed in an unsorted array since the algorithm relies on the order of the elements to determin which hafl of the array possibly contains the key. Assuming that the array is stagnated, it would be efficient if it is sorted first before invoking the binary search that way every call would not require to sort the array. Yes by linearly comparing the elements, the time complexity would be linear.

// 4.2.18 Analyze mathematically the number of compares that mergesort makes to sort an array of length n. For simplicity assume that n is a power of 2.
// [ANSER]: Most compares occure during the merging phase

// 4.2.2 Develop a nonrecursive implementation of binary searc
function nonRecurseBSearch(arr: string[], key: string) {
  let targetArr: string[] = arr;
  let lo = 0,
    hi = arr.length,
    mid = Math.floor((hi - lo) / 2);

  while (mid > 0) {
    if (key.localeCompare(targetArr[mid]) === -1)
      targetArr = targetArr.splice(0, mid);
    else if (key.localeCompare(targetArr[mid]) === 1)
      targetArr = targetArr.splice(mid + 1);
    else return `matched for ${key}`;

    console.log({ targetArr, mid });
    console.log(key.localeCompare(targetArr[mid]));

    mid = Math.floor(targetArr.length / 2);
  }

  console.log(targetArr[mid]);

  if (targetArr[mid] === key) `matched for ${key}`;

  return `no match found for ${key}`;
}

// 4.2.10 Write a filter that reads strings from standard input and prints them to standard output, in sorted order with all duplicate strings removed.
function filterArray(str: string[]): string[] {
  if (str.length === 1) return str;

  const mid = Math.floor(str.length / 2);
  const left = str.slice(0, mid);
  const right = str.slice(mid);

  return customMerge(filterArray(left), filterArray(right));
}

function customMerge(leftArr: string[], rightArr: string[]) {
  let lPointer = 0;
  let rPointer = 0;

  const mergedArr: string[] = [];

  while (rPointer < rightArr.length && lPointer < leftArr.length) {
    console.log(mergedArr);
    if (leftArr[lPointer].localeCompare(rightArr[rPointer]) === -1) {
      if (leftArr[lPointer] !== mergedArr[mergedArr.length - 1])
        mergedArr.push(leftArr[lPointer]);
      lPointer++;
    } else if (leftArr[lPointer].localeCompare(rightArr[rPointer]) === 1) {
      if (leftArr[lPointer] !== mergedArr[mergedArr.length - 1])
        mergedArr.push(rightArr[rPointer]);
      rPointer++;
    } else {
      if (leftArr[lPointer] !== mergedArr[mergedArr.length - 1]) {
        mergedArr.push(leftArr[lPointer]);
      }
      rPointer++;
      lPointer++;
    }
  }

  return mergedArr
    .concat(leftArr.slice(lPointer))
    .concat(rightArr.slice(rPointer));
}

function customMergeString(leftArr: string, rightArr: string) {
  let lPointer = 0;
  let rPointer = 0;

  const mergedArr: string[] = [];

  while (rPointer < rightArr.length && lPointer < leftArr.length) {
    console.log(mergedArr);
    if (leftArr[lPointer].localeCompare(rightArr[rPointer]) === -1) {
      if (leftArr[lPointer] !== mergedArr[mergedArr.length - 1])
        mergedArr.push(leftArr[lPointer]);
      lPointer++;
    } else if (leftArr[lPointer].localeCompare(rightArr[rPointer]) === 1) {
      if (leftArr[lPointer] !== mergedArr[mergedArr.length - 1])
        mergedArr.push(rightArr[rPointer]);
      rPointer++;
    } else {
      if (leftArr[lPointer] !== mergedArr[mergedArr.length - 1]) {
        mergedArr.push(leftArr[lPointer]);
      }
      rPointer++;
      lPointer++;
    }
  }

  return mergedArr
    .concat(leftArr.slice(lPointer))
    .concat(rightArr.slice(rPointer))
    .join("");
}

function filterString(str: string): string {
  if (str.length === 1) return str;
  const mid = Math.floor(str.length / 2);
  const left = str.slice(0, mid);
  const right = str.slice(mid);

  return customMergeString(filterString(left), filterString(right));
}

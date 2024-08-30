class Mergesort {
  private static merge(leftArr: string[], rightArr: string[]) {
    const mergedArr: string[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
      if (leftArr[leftIndex].localeCompare(rightArr[rightIndex]) === -1)
        mergedArr.push(leftArr[leftIndex++]);
      else if (leftArr[leftIndex].localeCompare(rightArr[rightIndex]) === 1)
        mergedArr.push(rightArr[rightIndex++]);
      else {
        mergedArr.push(leftArr[leftIndex++]);
        mergedArr.push(rightArr[rightIndex++]);
      }
    }

    return mergedArr
      .concat(leftArr.slice(leftIndex))
      .concat(rightArr.slice(rightIndex));
  }

  static mergeSort(arr: string[]): string[] {
    if (arr.length === 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return this.merge(this.mergeSort(left), this.mergeSort(right));
  }
}
const unsortedNames = [
  "John",
  "Alice",
  "Bob",
  "Diana",
  "Charlie",
  "Eve",
  "Frank",
  "Grace",
  "Hank",
  "Ivy",
  "Jack",
  "Kathy",
  "Leo",
  "Mona",
  "Nina",
  "Oscar",
  "Paul",
  "Quincy",
  "Rita",
  "Sam",
  "Tina",
  "Uma",
  "Victor",
  "Wendy",
  "Xander",
  "Yara",
  "Zane",
  "Aaron",
  "Bella",
  "Cody",
  "Derek",
  "Ella",
  "Fiona",
  "George",
  "Holly",
  "Ian",
  "Jill",
  "Kyle",
  "Liam",
  "Mia",
  "Nate",
  "Olivia",
  "Pete",
  "Quinn",
  "Rachel",
  "Steve",
  "Tara",
  "Ursula",
  "Vince",
  "Will",
];

const sortedNames = Mergesort.mergeSort(unsortedNames);

console.log(sortedNames);

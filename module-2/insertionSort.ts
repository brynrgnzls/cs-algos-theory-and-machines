function insertionSort(subject: string[], pointer: number) {
  if (pointer >= subject.length) return subject;

  const key = subject[pointer];

  for (let i = 0; i < pointer; i++) {
    if (key.localeCompare(subject[i]) <= 0) {
      subject.splice(pointer, 1);
      subject.splice(i, 0, key);
      return insertionSort(subject, pointer + 1);
    }
  }
  return insertionSort(subject, pointer + 1);
}

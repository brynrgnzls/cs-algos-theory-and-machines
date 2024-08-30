function bSearch(key: string, subject: string[], lo: number, hi: number) {
  if (hi <= lo) return -1;
  const mid = Math.floor((hi - lo) / 2);
  if (key === subject[mid]) return "found";

  if (key.localeCompare(subject[mid]) < 0)
    return bSearch(key, subject, mid + 1, hi);
  if (key.localeCompare(subject[mid]) > 0)
    return bSearch(key, subject, 0, mid - 1);

  return mid;
}

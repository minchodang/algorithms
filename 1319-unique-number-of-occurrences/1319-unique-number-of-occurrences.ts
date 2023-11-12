function uniqueOccurrences(arr: number[]): boolean {
  const frequencyMap = arr.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});

  const uniqueObj = new Set(Object.values(frequencyMap));

  return uniqueObj.size === Object.keys(frequencyMap).length;
}

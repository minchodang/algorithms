function uniqueOccurrences(arr: number[]): boolean {
 const duplicates = {};

arr.forEach((value) => {
  duplicates[value] = duplicates[value] ? duplicates[value] + 1 : 1;
});

const dulicatedArr = Object.values(duplicates);
const uniqueObj = new Set(dulicatedArr);

return uniqueObj.size === dulicatedArr.length;
  
};
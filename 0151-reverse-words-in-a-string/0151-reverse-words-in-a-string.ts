function reverseWords(s: string): string{
  const splittedString = s.trim().split(" ").filter((value)=> value).reverse();
  return splittedString.join(" ");
};
function indexOfIgnoreCase(str, subStr) {
  // Convert both strings to lowercase to perform case-insensitive comparison
  const lowerStr = str.toLowerCase();
  const lowerSubStr = subStr.toLowerCase();
  
  // Use the indexOf method to find the first occurrence
  return lowerStr.indexOf(lowerSubStr);
}

// Examples
console.log(indexOfIgnoreCase("Hello World", "world"));  // 6
console.log(indexOfIgnoreCase("apple", "Ple"));          // 2
console.log(indexOfIgnoreCase("test", "aaa"));           // -1


// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));

function reverseString(str) {
    // Split the string into an array of characters, reverse the array, and join it back into a string
    return str.split('').reverse().join('');
}

// Example usage:
console.log(reverseString("Hello World")); // Output: "dlroW olleH"
console.log(reverseString("JavaScript"));  // Output: "tpircSavaJ"

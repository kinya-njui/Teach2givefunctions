function countVowels(str) {
    // Define a string containing all vowels
    const vowels = 'aeiouAEIOU';
    // Initialize a counter for vowels
    let count = 0;

    // Loop through each character in the input string
    for (let char of str) {
        // Check if the character is a vowel
        if (vowels.includes(char)) {
            count++;
        }
    }

    // Return the total count of vowels
    return count;
}

// Example usage:
console.log(countVowels("Hello World")); // Output: 3
console.log(countVowels("JavaScript"));  // Output: 3

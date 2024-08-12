function filterEvenNumbers(arr) {
    // Use the filter method to create a new array with only even numbers
    return arr.filter(num => num % 2 === 0);
}

// Example usage:
console.log(filterEvenNumbers([1, 2, 3, 4, 5])); // Output: [2, 4]
console.log(filterEvenNumbers([10, 15, 20, 25])); // Output: [10, 20]
console.log(filterEvenNumbers([7, 11, 13])); // Output: []
console.log(filterEvenNumbers([0, -2, -4])); // Output: [0, -2, -4]
"use strict";
// Define the array
let placesToVisit = ["London", "Paris", "Bali", "Maldives", "Dubai"];
// Print the array in its original order
console.log("Original order:", placesToVisit);
// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...placesToVisit].sort());
// Show that the array is still in its original order
console.log("Original order:", placesToVisit);
// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());
// Show that the array is still in its original order
console.log("Original order:", placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
// Reverse the order of the list again
placesToVisit.reverse();
console.log("Reversed order back to original:", placesToVisit);
// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);
// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);

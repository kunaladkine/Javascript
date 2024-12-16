// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days of Javascript'

// Print the string on the browser console using console.log()
console.log(challenge);

// Print the length of the string on the browser console using console.log()
console.log(challenge.length);

// Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase())

// Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase())

// Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.split(0));


// Check if the string contains a word Script using includes() method
console.log(challenge.includes('a'));

// Split the string into an array using split() method
console.log(challenge.split([]));


// Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '));

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let lang = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(lang.split([,]))

// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('30 Days Of JavaScript','30 Days Of Python'))

// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15));

// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt('J'));


// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf([0]));


// Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match('a'));


// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript
let a='30 Days of'
console.log(a.concat("Javascript"));


// Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));

// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest




// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
describe("sentenceArr", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
  expect(sentenceArr(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// FAIL  ./code-challenges.test.js
// sentenceArr
//   ✕ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (2 ms)

// ● sentenceArr › takes in an array of objects and returns an array with a sentence about each person with their name capitalized

//   ReferenceError: sentenceArr is not defined


// b) Create the function that makes the test pass.

/* PSEUDOCODE
  - create a function named sentenceArr
  - input: array of objects
  - process:
    - map over array to put in a sentence, assign map to variable arrSentence
    - make variable capWords and separate each letter into its own index using split(" ") from the values of the name keys.
    - iterate over split array using a for loop, convert char at 0 to uppercase, then add to rest of letters using .slice(1) to start from the letter right after the one we just capitalized.
    - create variable called name and use .join to join letters from capWords back into a word.
  -output: array with interpolated name and the value of occupation.
*/

const sentenceArr = (array) => {
  let arrSentence = array.map((value) => {
    let capWords = value.name.split(" ")
    for(let index = 0; index < capWords.length; index++) {
      capWords[index] = capWords[index].charAt(0).toUpperCase() + capWords[index].slice(1)
    }
    let name = capWords.join(" ")
    return `${name} is ${value.occupation}.`
  })
  return arrSentence
}


// PASS  ./code-challenges.test.js
// sentenceArr
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (2 ms)




// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.
describe("remainderNums", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]  
  expect(remainderNums(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
  expect(remainderNums(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// FAIL  ./code-challenges.test.js
// remainderNums
//   ✕ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (3 ms)

// ● remainderNums › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3

//   ReferenceError: remainderNums is not defined


// b) Create the function that makes the test pass.
/* 
PSEUDOCODE
- create function named remainderNums
- input: array
-process:
  - filter method to filter out numbers from array
  - map method to perform %3 on numbers to extract remainder
-output: array of remainders
*/

const remainderNums = (array) => {
  let onlyNums = array.filter((value) => {
    return typeof value === 'number'
  })
  return onlyNums.map((value) => {
    return value % 3
  })
}

// PASS  ./code-challenges.test.js
// remainderNums
//   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (3 ms)





// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("sumCubed", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125    
  expect(sumCubed(cubeAndSum1)).toEqual(99)
  expect(sumCubed(cubeAndSum2)).toEqual(1125)
  })
})

// FAIL  ./code-challenges.test.js
// sumCubed
//   ✕ takes in an array of numbers and returns the sum of all the numbers cubed (5 ms)

// ● sumCubed › takes in an array of numbers and returns the sum of all the numbers cubed

//   ReferenceError: sumCubed is not defined



// b) Create the function that makes the test pass.
/* 
PSEUDOCODE
  - input: array
  - process: 
    - create function called sumCubed
    - take in array
    - use .map method to iterate over array, return Math.pow(value, 3) so it cubes each value in array
    - use .reduce over mapped array variable to sum the current cubed index to the next one
  - output:numbers sum of cubed values
*/

const sumCubed = (array) => {
  let cubedNums = array.map((value) => {
    return Math.pow(value, 3)
  })
    return cubedNums.reduce((accumulator, current) => {
      return accumulator + current
  }, 0)
}

// PASS  ./code-challenges.test.js
// sumCubed
//   ✓ takes in an array of numbers and returns the sum of all the numbers cubed (10 ms)

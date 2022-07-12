//---------- Palindrome ----------
const isPalindrome = (word) => {
  word = word.toString().toUpperCase();
  const validate = word.split("").reverse().join("");
  word === validate
    ? console.log("Word is Palindrome")
    : console.log("Word is not Palindrome");
};
// isPalindrome("EyE");

//---------- Bubble Sort ----------
const bubbleSort = (originalArray) => originalArray.sort((a, b) => a - b);

// console.log(bubbleSort([45, 7, -5, 3, 2, 1, 0]));

//---------- Find Maximum ----------
const findMaximum = (integerList) => {
  const ascending = bubbleSort(integerList);
  return ascending[ascending.length - 1];
};

// console.log(
//   findMaximum([1, 2222, 333, 444, 5555, 6666, 777, 8888, 999, 100000])
// );

//---------- FizzBuzz ----------
const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
};

// fizzBuzz(50);

//---------- Fibonnaci ----------
const fibonnaci = (number) => {
  let n1 = 0,
    n2 = 1,
    nextTerm;

  for (let i = 1; i <= number; i++) {
    console.log(`Fibonnaci Number: ${n1}`);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
};

// fibonnaci(10);

//---------- Ceasar Cipher ----------
const ceasarCipherDecoder = (input, shift = 3) => {
  const letters = input.split("");
  const anyLetter = /[a-z]/i;
  return letters
    .map((letter) => {
      if (!anyLetter.test(letter)) return letter;
      const upperLetter = letter.toUpperCase();
      const wasOriginalUpper = letter === upperLetter;
      const charCode = upperLetter.charCodeAt(0);
      const maskedLetter = String.fromCharCode(
        charCode + shift <= 90
          ? charCode + shift
          : ((charCode + shift) % 90) + 64
      );
      if (wasOriginalUpper) {
        return maskedLetter;
      }
      return maskedLetter.toLowerCase();
    })
    .join("");
};

// console.log(ceasarCipherDecoder("attackatonce"));

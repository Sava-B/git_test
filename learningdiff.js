// Your JavaScript goes here!
console.log("Hello, World!")

let message;
message = 'Hoi';
// const is a constant meaning it can't be changed
const myBirthday = 'Nov17';

const one = 'Hello, ';
const two = 'how are you?';
const joined = `${one}${two}`;

alert(message);

/* A quick function depicting how to use different prompts
and how to integrate the strings together so that it is 
comprehensive */
<button>Press me</button>

const button = document.querySelector('button');

function greet() {
    const name = prompt('What is your name?');
    alert(`Hello, ${name}, nice to see you!`);
}

button.addEventListener('click', greet)

// This is the 'Number' object. it can convert a string to a num
const myString = '123';
const myNum = Number(myString);
console.log(typeof myNum);

// Reverse process
const myNum2 = 123;
const myString2 = myNum2.toString();
console.log(typeof myString2);

// Including expressions in strings
function expressionsInStrings() {
    const song = 'Fight the Youth';
    const score = 9;
    const highestScore = 10;
    const output = `I like the song ${song}. I gave it a score of ${score/highestScore * 100}%.`;
    console.log(output);}  // "I like the song Fight the Youth. I gave it a score of 90%."

// If else statement example (basic)
const hour = new Date().getHours(); 
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
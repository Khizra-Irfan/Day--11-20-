//Question: 55
//list of numbers:
let numbers = [2, 4, 6, 8, 10];
//double each number:
let doubleNumbers = numbers.map(number => number * 2)
//.map is a call back function jo previous list ko lekr new list bana kr return kray ga that contains the result.
console.log(doubleNumbers);


//Question: 56
let mixedArray = ['shoes', 2, 'bags', 'dress', 5];
//pick out only the words:
let stringArray = mixedArray.filter(item => typeof item === "string");
//whenever we use .filter method so after an arrow function we should write 'typeof' and a word which we have written before an arrow function.
console.log(stringArray);
//this line checks each item ,if its a word it goes into a new list.


//Question: 57
let grades = [72, 89, 54, 65, 97, 81];
//calculate the average grades: 
let avgGrades = grades.reduce((total, grade) => total + grade, 0) / grades.length;
// total + grades adds the current grade to the accumulated total.
// 0 is the initial value for total (the starting point of the accumulation).
//This sum is then divided by grades.length, which is the number of elements in the grades array. This operation calculates the average grade.
console.log(avgGrades);

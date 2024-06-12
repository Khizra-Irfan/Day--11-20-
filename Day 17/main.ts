//Question 49:
//define a function that accepts multiple hobbies as arguments.
function defineHobbies(...hobbies: string[]){
    hobbies.forEach(hobby => {                  //loops through each hoppy in the array.
        console.log(`I enjoy ${hobby}.`);       //logs a statement for each hobby.
        
    });
}
//call the function.
defineHobbies("watching movies", "reading", "swimming")


//Question 50:
//template literals are these signs(```).
let myidealDay = `My ideal day would involve:
1. Waking up early.
2. Offer Salah.
3. Spending some hours in coding.
4. Ending the day by reading good books.`;

console.log(myidealDay);


//Question 51:
//original function for calculating area of rectangle:
function areaofRectangle (width: number, length: number): number
{
    return width*length;
}
//refactor into an arrow function:
let calculateareaArrow =(width: number, length: number): number => width*length;

//example of arrow function by calling the function and writing arguments.
console.log(calculateareaArrow(5, 7));         // 5 x 7 = 35

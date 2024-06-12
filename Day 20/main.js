"use strict";
//Question: 58
//we use function bcs we want to find alot of scores:
function avgScore(...scores) {
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}
let average = avgScore(52, 93, 118, 74, 45, 67);
console.log(average); // Output: 74.8333
//Question: 59
// makeAdder takes a number 'addValue' as an argument and returns a function
function makeAdder(addValue) {
    return function (number) {
        // The returned function takes a number and returns the sum of that number and 'addValue'
        return number + addValue;
    };
}
;
let addNum = makeAdder(4);
console.log(addNum(5)); // Calls the returned function with 5, which returns 5 + 4 = 9
//Question: 60
let userProfile = (function () {
    let name = "Ali";
    let age = 20;
    return {
        userInfo: function () {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();
userProfile.userInfo();

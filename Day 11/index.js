"use strict";
//Question 31:
let userNames = [];
if (userNames.length === 0) {
    console.log("We need to find some users");
}
else {
    console.log(`Hello ${userNames}, hope you are doing great`);
}
//Question 32:
let current_users = ['user1', 'user2', 'user3', 'admin', 'user4'];
let new_users = ['user4', 'user5', 'user6', 'user7', 'admin'];
new_users.forEach(newUser => {
    if (current_users.some(current_user => current_user.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username`);
    }
    else {
        console.log(`${newUser}is available.`);
    }
});
//Question 33:
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(number => {
    let suffix = "th";
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = "nd";
    }
    else if (number === 3) {
        suffix = "rd";
    }
    console.log(`${number}${suffix}`);
});

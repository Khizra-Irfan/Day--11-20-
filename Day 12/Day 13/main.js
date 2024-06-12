"use strict";
//Question 37:
function make_shirt(size = "large", message = "I love coding") {
    console.log(`Make a t-shirt of ${size} size with a message "${message}" printed on it.`);
}
;
make_shirt();
make_shirt("medium");
make_shirt("small", "Be Confident");
//Question 38:
function describe_cities(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
;
describe_cities("Karachi");
describe_cities("Islamabad");
describe_cities("Istanbul", "Turkey");
//Question 39:
//practices on string formatting and returning values from functions.
function city_country(city, country) {
    return `${city}, ${country}`;
}
;
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Istanbul", "Turkey"));
console.log(city_country("Paris", "France"));

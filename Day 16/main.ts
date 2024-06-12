//Question 46:
let laptopObjects = {
    make: "Dell",
    model: "Core i5",
    year: 2020,
    describe: function(){
        console.log(`This laptop feature is ${this.model} ${this.make} ${this.year}.`);
        
    }
}
laptopObjects.describe();

//The describe method can be used on any object that has the same structure. If you have another object with the same method, this will refer to that object 
//we use describe method that's why we use (this.) to describe that object's property. 



//Question 47:
let laptops = [
    {
        make: "Dell",
        model: "corei5",
        year: 2020
    }, {
        make: "Apple",
        model: "MacBook Pro",
        year: 2021
    }, {
        make: "HP",
        model: "Spectre x360",
        year: 2020
    }
];
let [laptop1, laptop2] = laptops;
console.log(laptop1);
console.log(laptop2);


//Question 48:
let priceofSet1 = [2000, 4000, 6000];
let priceofSet2 = [3000, 5000, 7000];
let combinedPrices = [...priceofSet1, ...priceofSet2].sort((a,b) => a-b);
console.log(combinedPrices);

//The sort method uses a comparison function.
//let combinedPrices = [...priceofSet1, ...priceofSet2] combines priceofSet1 and priceofSet2 into a single array. 
//The sort method accepts a comparison function (a, b).
//means yeh sort out krtay ga line wise saray prices ko.
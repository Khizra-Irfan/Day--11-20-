//Question 43:
let magicians: string[] = ['charles', 'david', 'michael'];
function magicians_name(magicians : string[]){
    magicians.forEach(magician => {
    console.log(magician);
    
    })
};

// Takes an array of magician names.
// Adds "the Great" to each name.
// Returns a new array with the modified names.
function modifyNames(magicians: string[]): string[] {
    let modifications : string[] = [];
    magicians.forEach(magician => {
        modifications.push(`${magician} the Great`)
    })
    return modifications;
};

// Uses magicians.slice() to avoid modifying the original array directly.
// Prints the original and modified arrays separately.
let modifications = modifyNames(magicians.slice());

console.log("Original array");
magicians_name(magicians); 

console.log("Great magicians");
magicians_name(modifications);          


//Question 44:
function make_sandwich(...items: string[]) {
    console.log(`Make a sandwich with: ${items.join(',')}`);
    }
make_sandwich("chicken", "cheese", "mayo sauce");
make_sandwich("lettuce", "tomato", "mayo");
make_sandwich("potato", "cheese", "ketchup");


//Question 45:

function make_car(manufacturer: string, model: string, ...options: [string, any][]){
    let car: any = {manufacturer, model};
    options.forEach(([key,value]) => {
        car[key] = value
    });
    return car;
}
console.log(make_car("Toyota", "Corolla", ["color", "white"], ["year", 2020]));
console.log(make_car("Suzuki", "Swift", ["color", "black"], ["fog lights", true]));
                                           //string[]            any[]

//Question: 52
let smartphone = {
    brand: "Apple",
    model: "Iphone-X",
    specs: {
    storage: "256-gb",                   //through this {} related info defined very neatly and clearly.
    batteryLife: "8 hours"
    }
};
console.log(smartphone);


//Question: 53
//a list showing programmer's skills:
let programmerSkills = {
    languages: ['Javascript', 'Python', 'Typescript'],
    frameworks: ['React', 'Angular', 'Vue'],
    tools: ['Git', 'Webpack', 'Docker']
};
//getting specific skills from the list:
let {languages, frameworks, tools} = programmerSkills;

//showing a skill from each category:
console.log(`Language: ${languages[2]}, Framework: ${frameworks[0]}, Tools: ${tools[0]}`);


//Question: 54
function createObjectwithDynamickeys (key: string, value: string){
    let dynamicObject: { [key: string]: string } = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
//using the flexible list in a user's preferences:
let userPreferences = createObjectwithDynamickeys("theme", "dark");

//showing the user's choice:
console.log(userPreferences);

//In this context, theme is the category of the user's preference, and dark is the chosen option within that category.
//"theme" is the key.
//"dark" is the value.



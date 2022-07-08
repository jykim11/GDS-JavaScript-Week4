// Creating array of objects for people.
// Purpose of creating the object is to be more flexible with adding more people.
var people = [
    {
        name: 'Tom',
        height: 9,
        mass: 8
    },

    {
        name: 'Jerry',
        height: 10,
        mass: 45
    }

]

var BMI = people.mass / Math.pow(people.height, 2);

var higherBMI = false;

if (BMI[0] > BMI[1]) {
    higherBMI = true;
}

console.log(`Is ${people[0].name}'s BMI higher than ${people[1].name}'s?`);
console.log(higherBMI);
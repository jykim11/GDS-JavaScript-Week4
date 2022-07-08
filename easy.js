// Creating array of Objects to have all students in 1 organized array for easier access.
const students = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 20
    },

    {
        firstName: "James",
        lastName: "Kim",
        age: 26
    },

    {
        firstName: "Mark",
        lastName: "Jones",
        age: 22
    }
];

console.log(`Hello, my name is ${students[1].firstName} ${students[1].lastName} and I'm ${students[1].age} years old.`);
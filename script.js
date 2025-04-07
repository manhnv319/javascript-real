const user = {
    name: "Manh",
    age: 22,
    job: "Backend Dev"
}

// Cach cu
const name1 = user.name;
const age1 = user.age;

// Destructuring
const { name, age } = user;

console.log(name);
console.log(age);

// Voi array 
const arr = [10, 20, 30];

// Cach cu
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring
const [x, y, z] = arr;
console.log(x);
console.log(y);


// Spread/Rest
const student = {
    id: 101,
    nameStudent: "Manh",
    scores: {
        math: 90,
        english: 8
    }
};

const {id, nameStudent, scores} = student;
const {math, english} = scores;
console.log(nameStudent, math);
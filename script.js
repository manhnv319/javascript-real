const student = {
    name: "Manh",
    scores: {
        math: 90
    }
};

console.log(student?.scores.math);
console.log(student?.address?.city);
console.log(student?.scores.english);

// Nullish Coalescing
const name = null;
const defaultName = "Guest";

console.log(name ?? defaultName);

const age = null;
console.log(age ?? 25);

console.log(student?.address?.city === undefined ? "No city found" : student.address.city);
console.log(student.name ?? "Manh");
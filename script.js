// Spread/Rest
const student = {
    id: 101,
    nameStudent: "Manh",
    scores: {
        math: 90,
        english: 8
    }
};

function printStudent({nameStudent, scores: {math}}) {
    console.log(`Ten: ${nameStudent}, Toan: ${math}`)
}

printStudent(student);


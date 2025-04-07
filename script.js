const numbers = [1, 2, 3, 4, 5];

// map
const doubled = numbers.map(num => num * 2);
console.log(doubled);

// filter
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// reduce
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

// forEach
numbers.forEach(num => {
    console.log(num);
})


function sayHello(name) {
    console.log("Hello " + name);
}

function greetUser(callback) {
    const name = "Manh";
    callback(name);
}

greetUser(sayHello);
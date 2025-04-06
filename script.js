async function myFunction() {
    return "Hello, world!";
}

myFunction().then(result => {
    console.log(result);
})


async function getUser() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
        if (!response.ok) {
            throw new Error('Khong tim thay nguoi dunng');
        }
        const user = await response.json();
        console.log(user);
    }catch (error) {
        console.error('Error:', error);
    }
}

getUser();
const promise= new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Thanh cong sau 2s");
        
    }, 2000);
});

promise.then((result) => {
    console.log("Ket qua: ", result);
}).catch((err) => {
    console.log("Loi ", err);
})
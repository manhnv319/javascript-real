function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Lay user...");
            resolve({id: 1});
        }, 1000);
    });
}

function getPostByUser(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Lay bai viet cua user...");
            resolve(["post1", "post2", "post3"]);
        }, 1000);
    });
}

function sendResponse(post) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Da gui phan hoi voi", post);
            resolve("Da gui!");
        }, 1000);
    });
}

// Chuoi Promise
getUser()
.then((user) => getPostByUser(user.id))
.then((posts) => sendResponse(posts))
.then((response) => console.log("ket qua", response))
.catch((err => console.error("Co loi", err)))
async function getUserAndPost(userId) {
    try { 
        const[userResponse, postsResponse] = await Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        ]);

        if (!userResponse.ok || !postsResponse.ok) {
            throw new Error("khong the lay du lieu");
        }

        const user = await userResponse.json();
        const posts = await postsResponse.json();

        console.log("Thong tin nguoi dung:", user);
        console.log("Danh sach bai viet:", posts);
    }catch(error) {
        console.error("Loi:", error);
    }
}

getUserAndPost(1);
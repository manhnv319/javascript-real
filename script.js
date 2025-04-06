async function getUserAndPost(userIds) {
    try {
        const userPromises = userIds.map(userId => {
            return Promise.all([
                fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
                fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            ]);
        });

        const allUsersData = await Promise.all(userPromises);

        allUsersData.forEach(([userResponse, postsResponse], index) => {
            if (!userResponse.ok || !postsResponse.ok) {
                throw new Error(`Khong the lay du lieu cho nguoi dung ${userIds[index]}`);
            }

            userResponse.json().then(user => {
                postsResponse.json().then(posts => {
                    console.log("Thong tin nguoi dung:", user);
                    console.log("Danh sach bai viet:", posts);
                });
            });
        });

    } catch (error) {
        console.error("Loi:", error);
    }
}

getUserAndPost([1, 2, 3]);
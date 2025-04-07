async function getUserAndPost(userIds) {
    try {
        const userPromises = userIds.map(userId => {
            return Promise.all([
                fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
                fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            ]);
        });

        const allUsersData = await Promise.all(userPromises);

        for (let i = 0; i < allUsersData.length; i++) {
            const [userResponse, postsResponse] = allUsersData[i];
            if (!userResponse.ok || !postsResponse.ok) {
                throw new Error(`Khong the lay du lieu cho nguoi dung ${userIds[index]}`);
            }

            const user = await userResponse.json();
            const posts = await postsResponse.json();
            console.log("Thong tin nguoi dung:", user);
            console.log("Danh sach bai viet:", posts);
        }

    } catch (error) {
        console.error("Loi:", error);
    }
}

getUserAndPost([1, 2, 3]);
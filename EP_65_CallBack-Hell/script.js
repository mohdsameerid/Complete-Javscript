

function makeHttpRequest(method, url, callBack) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
        callBack(xhr.response);
    });


    xhr.open(method, url);
    xhr.send();
}

makeHttpRequest('GET', 'https://dummyjson.com/users', (usersData) => {
    makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData?.users[0]?.id}`, (postsData) => {
        makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData?.posts[0]?.id}`, (commentsData) => {
            makeHttpRequest('GET', `https://dummyjson.com/products/${commentsData?.comments[0]?.id}`, (productData) => {
                console.log(productData);
            });
        });
    });
});

// This is callback hell where we have nested callbacks
//  inside callbacks making it hard to read and maintain the code.
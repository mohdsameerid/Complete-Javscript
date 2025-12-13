
// Def -> `fetch` is a modern web API for making network requests. It returns a Promise 
// that resolves to the Response object representing the response to the request.

// Example of using fetch to get data from an API endpoint

// fetch('https://dummyjson.com/products')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log('Error:', err));



// fetch('https://dummyjson.com/posts/add', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//         title: 'I am in love with someone.',
//         userId: 5,
//         /* other post data */
//     })
// })
//     .then(res => res.json())
//     .then(data => console.log(data));



// makeHttpRequest('GET', 'https://dummyjson.com/users', (usersData) => {
//     makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData?.users[0]?.id}`, (postsData) => {
//         makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData?.posts[0]?.id}`, (commentsData) => {
//             makeHttpRequest('GET', `https://dummyjson.com/products/${commentsData?.comments[0]?.id}`, (productData) => {
//                 console.log(productData);
//             });
//         });
//     });
// });



// Call back hell solve using fetch API

function httpsRequestUsingFetch(method, url) {
    const res = fetch(url, { method: method })
        .then(res => res.json())
        .then(data => data)
        .catch(error => console.log('Error:', error));

    return res
}

httpsRequestUsingFetch('GET', 'https://dummyjson.com/users')
    .then(usersData => {
        return httpsRequestUsingFetch('GET', `https://dummyjson.com/posts/user/${usersData?.users[0]?.id}`)
            .then(postData => {
                return httpsRequestUsingFetch('GET', `https://dummyjson.com/comments/post/${postData?.posts[0]?.id}`)
                    .then(commentsData => {
                        return httpsRequestUsingFetch('GET', `https://dummyjson.com/products/${commentsData?.comments[0]?.id}`)
                            .then(productData => {
                                console.log(productData);
                            })
                    })
            })
    })
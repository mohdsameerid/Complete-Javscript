// function makeHttpRequest(method, url, callback) {
//   const xhr = new XMLHttpRequest()
//   xhr.responseType = 'json'
//   xhr.addEventListener('load', () => {
//     callback(xhr.response)
//   })

//   xhr.open(method, url)
//   xhr.send()
// }

// makeHttpRequest('GET', 'https://dummyjson.com/users', (usersData) => {
//   makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`, (postsData) => {
//     makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`, (commentsData) => {
//       makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`, (userData) => {
//         console.log(userData);
//       });
//     });
//   });
// })


/////////////////////// Let us fix this callback hell using promises chaining. //////////////////////
function makeHttpRequest(method, url) {
  const xhr = new XMLHttpRequest()
  xhr.responseType = 'json'

  const promise = new Promise((resolve, reject) => {
    xhr.addEventListener('load', () => {
      resolve(xhr.response);
    });
    xhr.addEventListener('error', () => {
      reject('Error occurred while making the request');
    })
  })
  xhr.open(method, url)
  xhr.send()

  return promise;
}

makeHttpRequest('GET', 'https://dummyjson.com/users')
  .then(usersData => {
    return makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`);
  })
  .then(postsData => {
    return makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`);
  })
  .then(commentsData => {
    return makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`);
  })
  .then(userData => {
    console.log(userData);
  })
  .catch(error => {
    console.log(error);
  });



// Note -> Here each makeHttpRequest returns a promise and we are returning that promise in the then block.
// So the next then block waits for that promise to resolve and gets the data.
// This way we have flattened the code and made it more readable and maintainable.

// Code is now horizontally aligned not vertically aligned like callback hell.
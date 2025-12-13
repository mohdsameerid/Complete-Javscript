async function makeAsyncRequest() {
  const url = 'https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=2000'
  const response = await fetch(url)
  const data = await response.json()
  return data
}

makeAsyncRequest().then((data) => {
  console.log(data);
})


// Def -> `async` and `await` are modern JavaScript keywords that simplify working with Promises.
// `async` is used to declare an asynchronous function that returns a Promise.
// `await` is used to pause the execution of an async function until a Promise is resolved.

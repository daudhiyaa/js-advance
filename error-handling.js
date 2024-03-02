// ==== PROMISE ====
// use then and catch to handle the promise
promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// ==== ASYNC AWAIT ====
// use try and catch to handle the promise
const testAsync = async () => {
  try {
    const result = await testPromise();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

// ==== FETCH ====
// throw new Error
const testPromise = () => {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((json) => {
      if (json.Response === "False") {
        throw new Error(json.Error);
      }
      return json.Search;
    });
};

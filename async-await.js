/*
=====================
==== ASYNC AWAIT ====
=====================
*/

const testPromise = () => {
  return new Promise((resolve, reject) => {
    const timeout = 3000;
    if (timeout > 5000) {
      reject("rejected");
    } else {
      setTimeout(() => {
        resolve("resolved");
      }, timeout);
    }
  });
};

const testAsync = async () => {
  try {
    const result = await testPromise();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

testAsync();

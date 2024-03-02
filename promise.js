/*  
==================
==== PROMISE =====
==================
*/

const isError = false;
const promise1 = new Promise((resolve, reject) => {
  if (!isError) {
    resolve("Success");
  } else {
    reject("Error");
  }
});

promise1
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// Promise with setTimeout
/*
 * Digunakan saat loading, *
 * Saat promise dijalankan, jalankan animasinya *
 * Jika sudah selesai waiting, jalankan finally() untuk mematikan animasi *
 */

const timeout = 2000;
let isAvailable = true;
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isAvailable) {
      resolve(`Success after ${timeout / 1000} seconds`);
    } else {
      reject(`Error after ${timeout / 1000} seconds`);
    }
  }, timeout);
});

console.log("Start");
promise2
  .finally(() => console.log("Finish waiting!"))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
console.log("End");

// Promise.all

const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "The Dark Knight",
        sutradara: "Christopher Nolan",
        tahun: 2008,
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "Jakarta",
        suhu: 30,
        kondisi: "Cerah",
      },
    ]);
  }, 500);
});

Promise.all([film, cuaca])
  // .then((results) => console.log(results))
  .then((results) => {
    const [film, cuaca] = results;
    console.log(film);
    console.log(cuaca);
  });

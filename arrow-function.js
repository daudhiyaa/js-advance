/*
=========================
==== ARROW FUNCTION =====
=========================
*/

// ===== IMPLICIT RETURN ========
const minus = (a, b) => a - b;
console.log(minus(10, 5));

const sayHello = (name) => `Hello ${name}`;
const helloWorld = () => `Hello World`;

// ===== =====
const names = ["John", "Jane", "Bob"];
const objectNames = names.map((name) => ({
  name: name,
  length: name.length,
}));
console.table(objectNames);

// ===== Konsep `this` pada Arrow Function =====

// Object Literal (tanpa arrow function) => tidak eror
const murid1 = {
  name: "Your Name",
  energy: 10,
  makan: function (porsi) {
    this.energy += porsi;
    console.log(`Halo ${this.name}, selamat makan!`);
  },
};

// Object Literal (menggunakan arrow function) =>
// ! ERROR karena tidak ada konsep `this` pada arrow function
const murid2 = {
  name: "Your Name",
  energy: 10,
  makan: (porsi) => {
    this.energy += porsi;
    console.log(`Halo ${this.name}, selamat makan!`);
  },
};

const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle(satu);

  // akan dilakukan hoisting
  // jika tidak menggunakan arrow function,
  // maka `this` akan merujuk pada window
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});

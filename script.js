/*
=================================
==== CREATE AN OBJECT IN JS =====
=================================
*/

// 1. Object Literal
// ! PROBLEM : Tidak efektif untuk object yang banyak
let mhs = {
  name: "Your Name",
  energy: 10,
  makan: (porsi) => {
    this.energy += porsi;
    console.log(`Halo ${this.name}, selamat makan!`);
  },
};

// 2. Function Declaration => like a class
function Mhs(name, energy) {
  let mhs = {};
  mhs.name = name;
  mhs.energy = energy;

  // ! PROBLEM : Fungsi akan dibuat berulang kali setiap ada instansiasi object baru (memory space akan terbuang)
  mhs.makan = (porsi) => {
    this.energy += porsi;
    console.log(`Halo ${this.name}, selamat makan!`);
  };
  mhs.main = (jam) => {
    this.energy -= jam;
    console.log(`Halo ${this.name}, selamat bermain!`);
  };

  return mhs;
}

let mhs1 = Mhs("Your Name", 10);
let mhs2 = Mhs("Your Name", 20);

// 3. Contstructor Function
function Mahasiswa(name, energy) {
  this.name = name;
  this.energy = energy;

  this.makan = (porsi) => {
    this.energy += porsi;
    console.log(`Halo ${this.name}, selamat makan!`);
  };

  this.main = (jam) => {
    this.energy -= jam;
    console.log(`Halo ${this.name}, selamat bermain!`);
  };
}

let mahasiswa1 = new Mahasiswa("Your Name", 10);
let mahasiswa2 = new Mahasiswa("Your Name", 20);

// 4. Object.create()
const methodMahasiswa = {
  makan: (porsi) => {
    this.energy += porsi;
    console.log(`Halo ${this.name}, selamat makan!`);
  },
  main: (jam) => {
    this.energy -= jam;
    console.log(`Halo ${this.name}, selamat bermain!`);
  },
  tidur: (jam) => {
    this.energy += jam * 2;
    console.log(`Halo ${this.name}, selamat tidur!`);
  },
};

function mhs(name, energy) {
  let mhs = Object.create(methodMahasiswa);
  mhs.name = name;
  mhs.energy = energy;

  return mhs;
}

/*
====================
==== PROTOTYPE =====
====================
*/

function Student(name, energy) {
  this.name = name;
  this.energy = energy;
}

Student.prototype.makan = (porsi) => {
  this.energy += porsi;
  return `Halo ${this.name}, selamat makan!`;
};

Student.prototype.main = (jam) => {
  this.energy -= jam;
  return `Halo ${this.name}, selamat bermain!`;
};

Student.prototype.tidur = (jam) => {
  this.energy += jam * 2;
  return `Halo ${this.name}, selamat tidur!`;
};

let student1 = new Student("Your Name", 10);

/*
================
==== CLASS =====
================
*/

class StudentClass {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }

  makan(porsi) {
    this.energy += porsi;
    return `Halo ${this.name}, selamat makan!`;
  }

  main(jam) {
    this.energy -= jam;
    return `Halo ${this.name}, selamat bermain!`;
  }

  tidur(jam) {
    this.energy += jam * 2;
    return `Halo ${this.name}, selamat tidur!`;
  }
}

let student2 = new StudentClass("Your Name", 10);

/*
==================
==== CLOSURE =====
==================
*/

function init() {
  let name = "Your Name"; // local variable
  // inner function (closure*)
  function tampilName() {
    console.log(name); // access to parent variable
  }
  tampilName();
}

init();

// ===== FUNCTION FACTORIES ========
function ucapkanSalam(waktu) {
  return (nama) => {
    console.log(`Halo ${nama}, selamat ${waktu}`);
  };
}

let selamatPagi = ucapkanSalam("Pagi");
let selamatSiang = ucapkanSalam("Siang");
let selamatMalam = ucapkanSalam("Malam");

selamatPagi("Namamu");
selamatSiang("Nama dia");

// ===== PRIVATE METHOD ========
let add = (() => {
  let counter = 0;
  return () => {
    return ++counter;
  };
})(); // immediately invoked function expression (IIFE) => (function(){....})()

console.log(add());
console.log(add());
console.log(add());

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

// Object Literal (menggunakan arrow function) => // ! ERROR karena tidak ada konsep `this` pada arrow function
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
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});

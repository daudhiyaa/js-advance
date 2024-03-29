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

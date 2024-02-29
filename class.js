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

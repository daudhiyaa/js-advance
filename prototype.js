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

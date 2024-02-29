/*
=======================
==== DESTRUCTURING ====
=======================
*/

// Destructuring Array
const perkenalan = ["Halo", "nama", "saya", "Namamu"];
const [salam, , , yourName] = perkenalan;
console.log(salam); // Halo
console.log(yourName); // Namamu

// Swap Items
let a = 1;
let b = 2;
[a, b] = [b, a];

// Return Value pada Function
const coba = () => [1, 2];
const [c, d] = coba();

// Destructuring Object
const mhs = {
  nama: "Nama",
  umur: 20,
};

const { nama, umur } = mhs;

// Assignment tanpa deklarasi object
({ nama: n, umur: u } = {
  nama: "Nama",
  umur: 20,
});

// Assign ke variable baru
const murid = {
  nama: "Nama",
  umur: 20,
};

const { nama: n, umur: u } = murid;
console.log(n); // Nama

// Memberikan Default Value
const student = {
  nama: "Nama",
  umur: 20,
};

const { nama: na, umur: um, email: em = "youremailemail.com" } = student;

// Mengambil field pada object,
// setelah dikirim sebagai parameter untuk function
const stud = {
  id: 123,
  nama: "Nama",
  umur: 20,
};

const getIdStudent = ({ id, nama }) => id;
console.log(getIdStudent(stud)); // 123

// ==== CONTOH 1 ====
const kalkulasi = (a, b) => {
  tambah = a + b;
  kurang = a - b;
  kali = a * b;
  bagi = a / b;
};

// urutan tidak penting
const { bagi, kurang, kali, tambah } = kalkulasi(2, 3);

// ==== CONTOH 2 ====
const mahasiswa = {
  nama: "Nama",
  umur: 20,
  email: "email@com",
  nilai: {
    tugas: 80,
    uts: 85,
    uas: 75,
  },
};

const cetakMhs = ({ nama, umur, nilai: { tugas, uts, uas } }) => {
  return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}`;
};

console.log(cetakMhs(mahasiswa));

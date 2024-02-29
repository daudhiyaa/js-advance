/*
================================
==== HIGHER ORDER FUNCTION =====
================================
*/

// Contoh 1 : Function sebagai return value
function salam(waktu) {
  return (nama) => console.log(`Halo ${nama}, selamat ${waktu}`);
}

// Contoh 2 : Function sebagai argument/parameter
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
repeat(5, console.log);
repeat(3, alert);

// ===== FILTER, MAP, REDUCE ======
const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Filter
const angkaGenap = angka.filter((a) => a % 2 === 0);

// 2. Map
const angkaPangkat = angka.map((a) => a * a);

// 3. Reduce
// jumlahkan seluruh elemen pada array
// a = accumulator, c = currentValue
const startValue = 0;
const total = angka.reduce((a, c) => a + c, startValue);

// ===== METHOD CHAINING ======
/*
 * Cari Angka 5, lalu kalikan 3,
 * lalu jumlahkan semua hasilnya
 */

const result = angka
  .filter((a) => a > 5)
  .map((a) => a * 3)
  .reduce((a, c) => a + c, startValue);

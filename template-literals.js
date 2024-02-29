/*
===========================
==== TEMPLATE LITERALS ====
===========================
*/

// 1. Multi-line String
const multiLine = `Halo
  nama saya 
  ....`;

// 2. Embedded Expression
const namamu = "Your Name";
const age = 20;
const hello = `Halo, nama saya ${namamu}, 
  saya berusia ${age} tahun`;

// 3. HTML Fragments
const mhs = {
  name: "Your Name",
  age: 20,
  email: "yourname@gmail.com",
};

const el = `<div class="mhs">
  <h2>${mhs.name}</h2>
  <span class="age">${mhs.age}</span>
  <p>Email : ${mhs.email}</p>`;

// 4. Expression Interpolation
const a = 10;
const b = 15;
const res = `Hasil penjumlahan ${a} + ${b} = ${a + b}`;

// ==== TAGGED TEMPLATE ====
function highlight(strings, ...values) {
  return strings.reduce(
    (result, str, i) =>
      `${result}${str} <span class="hl">${values[i] || ""}</span>`,
    ""
  );
}

const str = highlight`Halo, nama saya ${mhs.name}, saya berusia ${mhs.age} tahun,dan email saya adalah ${mhs.email}`;

console.log(str);

/**
 * Kegunaan Lainnya dari Tagged Template:
 * 1. Sanitasi HTML
 * 2. Internationalization & Localization
 * 3. Styled Components
 */

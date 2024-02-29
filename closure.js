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
  return (nama) => console.log(`Halo ${nama}, selamat ${waktu}`);
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
})();

console.log(add());
console.log(add());
console.log(add());

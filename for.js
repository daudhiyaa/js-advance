/*
=================
==== FOR..OF ====
=================
*/

// ONLY FOR ITERABLE OBJECTS

const mhs = ["Mhs1", "Mhs2", "Mhs3"];
for (const [i, m] of mhs.entries()) {
  console.log(`Mahasiswa ke-${i + 1} adalah ${m}`);
}

/*
=================
==== FOR..IN ====
=================
*/

// ONLY FOR ENUMERABLE (object properties)

const mahasiswa = {
  nama: "Nama",
  umur: 20,
  email: "email@com",
};

for (const m in mahasiswa) {
  console.log(m); // outputnya properti
  console.log(mahasiswa[m]); // outputnya value
}

/*  
=========================  
==== REST PARAMETER =====  
=========================  
*/

// ! HARUS MENJADI PARAMETER TERAKHIR

const summarize = (...numbers) => {
  return numbers.reduce((total, currentValue) => {
    return total + currentValue;
  });
};

console.log(summarize(1, 2, 3, 4, 5)); // 15

// Array Destructuring
const [ketua, wakil, ...anggota] = ["A", "B", "C", "D", "E"];
console.log(anggota); // [ 'C', 'D', 'E' ]

// Object Destructuring
const team = {
  pm: "A",
  frontEnd: "B",
  backEnd: "C",
  ux: "D",
  devOps: "E",
};

const { pm, ...myTeam } = team;
console.log(myTeam); // { frontEnd: 'B', backEnd: 'C', ux: 'D', devOps: 'E' }

// filtering
const filterBy = (type, ...values) => {
  return values.filter((value) => typeof value === type);
};

console.log(filterBy("number", 1, 2, "A", false, 3, "B", 4, 5)); // [ 1, 2, 3, 4, 5 ]

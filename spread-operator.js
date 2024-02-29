/*  
==========================  
==== SPREAD OPERATOR =====  
==========================  
*/

// 1. Menggabungkan array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// lebih flexible daripada .concat()
const arr3 = [...arr1, 0, ...arr2];

// 2. Meng-copy array
const arr4 = [...arr1];

/*  
========================  
==== ASYCNHCRONOUS =====  
========================  
*/

// CALLBACK

const getDataMahasiswa = (url, success, error) => {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      success(JSON.parse(xhr.response));
    } else if (xhr.status === 404) {
      error();
    }
  };

  xhr.open("GET", url);
  xhr.send();
};

console.log("Start");
getDataMahasiswa(
  "data/mahasiswa.json",
  (results) => {
    results.forEach((mhs) => console.log(mhs.nama));
  },
  () => {
    alert("Error");
  }
);
console.log("End");

// Using JQuery
$.ajax({
  url: "data/mahasiswa.json",
  success: (results) => {
    results.forEach((mhs) => console.log(mhs.nama));
  },
  error: (e) => {
    alert(`Error ${e}`);
  },
});

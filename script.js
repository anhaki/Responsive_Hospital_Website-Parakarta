window.addEventListener("scroll", function () {
  const navigasi = document.getElementsByTagName("nav")[0];

  navigasi.classList.toggle("lengket", window.scrollY > 0);
});

const navigasi = document.getElementById("navigasi");
const tbl = document.getElementById("burgerBut");

tbl.addEventListener("click", function () {
  navigasi.classList.toggle("bgPutih");
});

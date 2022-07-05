const open = document.getElementById("open");
const close = document.getElementById("close");
const contanier = document.querySelector(".container");

// console.log('<==  ==>',open);
open.addEventListener("click", () => {
  contanier.classList.add("show-nav");
});

close.addEventListener("click", () => contanier.classList.remove("show-nav"));

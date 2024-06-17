const period = document.querySelector("#period");
const basic = document.querySelector(".basic");
const pro = document.querySelector(".pro");
const master = document.querySelector(".master");

period.addEventListener("change", function (e) {
  if (e.target.value === "0") {
    basic.innerText = "199.99";
    pro.innerText = "249.99";
    master.innerText = "399.99";
  } else {
    basic.innerText = "19.99";
    pro.innerText = "24.99";
    master.innerText = "39.99";
  }
});

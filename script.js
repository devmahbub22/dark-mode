const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const darkMode = document.getElementById("m-moon");



 menuBtn.addEventListener("click", () => {
  document.body.classList.add("showme")
 });
 closeBtn.addEventListener("click", () => {
   document.body.classList.remove("showme");
 });

darkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

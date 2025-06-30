const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const num = document.querySelector(".num");
let a = 1;
plus.addEventListener("click", () => {
    a++;
    a = (a < 10) ? "0" + a : a;
    num.innerText = a;
})
minus.addEventListener("click", () => {
   a--;
   num.innerHTML=a;
})
// alert("Hello");

const Main = document.getElementById("main");
const DonateBtn = document.querySelectorAll(".Donate-now");
const DonateAmount = document.querySelectorAll(".DonateAmount");
const getIndex = DonateBtn.forEach((btn, index) => {
  btn.onclick = () => {
    return index;
  };
});

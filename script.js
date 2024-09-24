// alert("Hello");

const Main = document.getElementById("main");
const AccountBalance = document.getElementById("balance");
const DonateBtn = document.querySelectorAll(".Donate-now");
const DonateAmount = document.querySelectorAll(".DonateAmount");
const TotalDonate = document.querySelectorAll(".Total_Donate");
let Balance = 7000;
const getIndex = DonateBtn.forEach((btn, index) => {
  btn.onclick = () => {
    let NewBalance;
    const Amount = parseInt(DonateAmount[index].value);
    if (isNaN(Amount)) {
      alert("Wrond Input");
    } else {
      NewBalance = parseInt(Balance) - Amount;
      Balance = NewBalance;
      AccountBalance.innerHTML = `<img src="./assets/coin.png" alt="balance" /> ${Balance} BDT`;
      TotalDonate[
        index
      ].innerHTML = `<img src="./assets/coin.png" alt="coin" /> ${Amount} BDT`;
      DonateAmount[index].value = "";
      console.log(Amount);
    }
  };
});

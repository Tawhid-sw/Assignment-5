// alert("Hello");

Appender = (Element, Append) => {
  const CreatElement = document.createElement(Element);
  Append.appendChild(CreatElement);
  return CreatElement;
};

// Alert Card
const Alertcard = (title, Message, Status) => {
  const Body = document.body;
  const Bg = Appender("div", Body);
  Bg.className =
    "fixed top-0 left-0 z-20 flex items-center justify-center w-full h-full Bg bg-black/50";
  const AlertCard = Appender("div", Bg);
  AlertCard.className =
    "AlertCard bg-white shadow-md rounded-2xl flex items-center gap-6 flex-col py-4 px-6 lg:w-1/3 sm:w-1/2 w-[90%]";
  const Title = Appender("h1", AlertCard);
  Title.className = "text-xl font-extrabold md:text-3xl";
  Title.textContent = title;
  const CoinImg = Appender("img", AlertCard);
  CoinImg.className = "w-12";
  CoinImg.src = "./assets/coin.png ";
  const Desc = Appender("p", AlertCard);
  Desc.className = "text-sm font-medium text-gray-600";
  Desc.textContent = Message;
  const Warning = Appender("p", AlertCard);
  Warning.className = "text-sm font-extrabold md:text-xl";
  Warning.textContent = Status;
  const CloseBtn = Appender("button", AlertCard);
  CloseBtn.className = "mb-3 text-sm font-bold text-gray-400 ";
  CloseBtn.textContent = "Close Confirmation";
  CloseBtn.onclick = () => {
    Bg.remove();
  };
};

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
      Alertcard("Error", "Wrong Input", "Transaction failed");
    } else if (Balance < Amount) {
      Alertcard("Error", "Insufficient amount", "Transaction failed");
    } else {
      Alertcard(
        "Congrates!",
        "You Have Donated For Human Kind",
        "Successfully"
      );
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

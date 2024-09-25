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
const AccountBalance = document.querySelectorAll(".Balance");
const DonateBtn = document.querySelectorAll(".Donate-now");
const DonateAmount = document.querySelectorAll(".DonateAmount");
const TotalDonate = document.querySelectorAll(".Total_Donate");
const CampainName = document.querySelectorAll(".CampName");

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
      AccountBalance.forEach((e) => {
        e.innerHTML = `<img src="./assets/coin.png" alt="balance" /> ${Balance} BDT`;
      });

      TotalDonate[
        index
      ].innerHTML = `<img src="./assets/coin.png" alt="coin" /> ${Amount} BDT`;
      DonateAmount[index].value = "";
      const date = new Date();
      History(date, Amount, CampainName[index].innerText);
      console.log(CampainName);
    }
  };
});

const btnDonation = document.querySelectorAll(".Donation");
const Inseider = document.getElementById("inseider");
const btnHistory = document.querySelectorAll(".History");
const viewHistory = document.getElementById("viewHistory");
const MobileMenu = document.getElementById("menu");
const MenuView = document.getElementById("ViewMenu");

btnHistory.forEach((btn) => {
  btn.onclick = () => {
    Inseider.classList.remove("block");
    Inseider.classList.add("hidden");
    viewHistory.classList.remove("hidden");
    viewHistory.classList.add("block");
    btn.classList.add("bg-yellow-200");
    btn.classList.remove("border");
    btnDonation.forEach((btns) => {
      btns.classList.remove("bg-yellow-200");
      btns.classList.add("border");
      MenuView.classList.add("hidden");
    });
  };
});
btnDonation.forEach((btn) => {
  btn.onclick = () => {
    Inseider.classList.add("block");
    Inseider.classList.remove("hidden");
    viewHistory.classList.add("hidden");
    viewHistory.classList.remove("block");
    btnHistory.forEach((btns) => {
      btns.classList.remove("bg-yellow-200");
      btns.classList.add("border");
    });
    btn.classList.add("bg-yellow-200");
    btn.classList.remove("border");
    MenuView.classList.add("hidden");
  };
});
MobileMenu.onclick = () => {
  MenuView.classList.toggle("hidden");
};

// History
History = (GetDate, Amounts, CampName) => {
  const viewHistory = document.getElementById("viewHistory");
  const Div = Appender("div", viewHistory);
  Div.className = "w-full mb-12";
  const DonationName = Appender("h1", Div);
  DonationName.className = "mb-2 text-lg font-bold text-gray-800 md:text-xl";
  DonationName.textContent = Amounts + " BTD " + CampName;
  const DonationTime = Appender("p", Div);
  DonationTime.className = "text-sm font-bold text-gray-500 ";
  DonationTime.textContent = "Date " + GetDate;
};

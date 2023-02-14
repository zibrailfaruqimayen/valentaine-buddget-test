// function handleKitKatBtn() {
//   console.log("hello");
// }

// -----kitkat------
document
  .getElementById("kitkat-buy-btn")
  .addEventListener("click", function () {
    const quantity = getInputValue("kitkat-quantity");
    const kitkatCost = quantity * 200;
    // document.getElementById("chocolate").innerText = kitkatCost;
    setInnerText("chocolate", kitkatCost);
    total();
  });
// -----rose------
document.getElementById("rose-buy-btn").addEventListener("click", function () {
  const quantity = getInputValue("rose-quantity");
  const roseCost = quantity * 100;
  // document.getElementById("rose").innerText = roseCost;
  setInnerText("rose", roseCost);
  total();
});
// ------diary-------
document.getElementById("diary-buy-btn").addEventListener("click", function () {
  const quantity = getInputValue("diary-quantity");
  const diaryCost = quantity * 100;
  // document.getElementById("diary").innerText = diaryCost;
  setInnerText("diary", diaryCost);
  total();
});

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

function getInputValue(id) {
  const value = document.getElementById(id).value;
  return parseInt(value);
}

function total() {
  const chocolate = document.getElementById("chocolate").innerText;
  const rose = document.getElementById("rose").innerText;
  const diary = document.getElementById("diary").innerText;
  const totalSum = parseInt(chocolate) + parseInt(rose) + parseInt(diary);
  setInnerText("total", totalSum);
}

document
  .getElementById("promo-apply-btn")
  .addEventListener("click", function () {
    const promoCode = getInputValue("promo-code");
    if (promoCode == 101) {
      const total = document.getElementById("total").innerText;
      const sum = total - parseInt(total) * 0.1;
      setInnerText("all-total", sum);
    } else {
      alert("wrong promo code try again with valid code");
    }
  });

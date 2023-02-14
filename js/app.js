// function handleKitKatBtn() {
//   console.log("hello");
// }

// -----kitkat------
document
  .getElementById("kitkat-buy-btn")
  .addEventListener("click", function () {
    const quantity = document.getElementById("kitkat-quantity").value;
    const kitkatCost = quantity * 200;
    document.getElementById("chocolate").innerText = kitkatCost;
  });
// -----rose------
document.getElementById("rose-buy-btn").addEventListener("click", function () {
  const quantity = document.getElementById("rose-quantity").value;
  const roseCost = quantity * 100;
  document.getElementById("rose").innerText = roseCost;
});
// ------diary-------
document.getElementById("diary-buy-btn").addEventListener("click", function () {
  const quantity = document.getElementById("diary-quantity").value;
  const diaryCost = quantity * 100;
  document.getElementById("diary").innerText = diaryCost;
});

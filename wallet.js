let balance = parseInt(localStorage.getItem("balance")) || 0;
const balanceDisplay = document.getElementById("balance");
const historyList = document.getElementById("historyList");

function updateBalance() {
  balanceDisplay.textContent = ₦${balance};
  localStorage.setItem("balance", balance); // save to local storage
}

function addBalance() {
  balance += 100;
  updateBalance();
  addToHistory("Added ₦100");
}

function sendBalance() {
  if (balance >= 50) {
    balance -= 50;
    updateBalance();
    addToHistory("Sent ₦50");
  } else {
    alert("Not enough balance!");
  }
}

function addToHistory(message) {
  const li = document.createElement("li");
  li.textContent = message;
  historyList.appendChild(li);
}
updateBalance(); // show saved balance on page load
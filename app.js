document.getElementById("app").innerHTML = `
  <div style="text-align:center;">
    <h2>Wallet Balance: <span id="balance">₦0</span></h2>
    <button onclick="addBalance()">Add ₦100</button>
    <button onclick="sendBalance()">Send ₦50</button>
    <div id="history" style="margin-top:20px;">
      <h3>Transaction History</h3>
      <ul id="historyList"></ul>
    </div>
  </div>
`;
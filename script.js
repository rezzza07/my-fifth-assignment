
let heartCount = 0, coinCount = 100;

const heartCounter = document.getElementById("heartCount");
const coinCounter = document.getElementById("coinCount");
const historyContainer = document.getElementById("callHistory");
const clearBtn = document.getElementById("clearHistoryBtn");

// --- Heart Icon ---
document.querySelectorAll(".fa-heart").forEach(function(icon) {
  icon.style.cursor = "pointer";
  icon.onclick = function() {
    heartCounter.textContent = ++heartCount;
  };
});


// --- Call Btn ---
document.querySelectorAll(".fa-phone").forEach(function(icon) {
  icon.parentElement.onclick = function() {
    const card = icon.closest(".bg-white");
    const serviceName = card.querySelector("h2").textContent;
    const number = card.querySelector("h1").textContent.trim();

    if (coinCount < 20) return alert("Not enough coins! You need at least 20 to make a call.");

    coinCounter.textContent = coinCount -= 20;
    alert(`Calling ${serviceName} at ${number}`);
    addToHistory(serviceName, number);
  };
});


// --- Add Call to History ---
function addToHistory(serviceName, number) {
  const time = new Date().toLocaleTimeString();
  const historyItems = [
    {
      serviceName: serviceName,
      number: number,
      time: time
    }
  ];

  for (const item of historyItems) {
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="flex justify-between items-center p-4 bg-[#fafafa]">
        <div>
          <p class="text-sm font-semibold">${item.serviceName}</p>
          <p class="text-xs text-gray-500">${item.number}</p>
        </div>
        <span class="text-xs">${item.time}</span>
      </div>
    `;
    historyContainer.insertAdjacentElement("afterbegin", div);
  }
}

// --- Clear History ---
clearBtn && (clearBtn.onclick = () => historyContainer.innerHTML = "");


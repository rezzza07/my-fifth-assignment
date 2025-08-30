const validPin = 1234
const transactionData = []

// functions to get input values
function getInputValueNumber (id){
  const inputField = document.getElementById(id)
  const inputFieldValue = inputField.value
  const inputFieldValueNumber = parseInt(inputFieldValue)
  return inputFieldValueNumber
}

function getInputValue (id){
  const inputField = document.getElementById(id)
  const inputFieldValue = inputField.value
  return inputFieldValue
}

// function to set innerText
function setInnerText(value){
  console.log(value)
  const availableBalanceElement = document.getElementById("available-balance")
  availableBalanceElement.innerText = value
}

// function to toggle
function handleToggle(id) {
  const forms = document.getElementsByClassName("form")
}
for(const form of forms){
  form.style.display = "none"
}
document.getElementById(id).style.display = "block"

// function to toggle buttons
function handleButtonToggle(id){
  const formBtns = document.getElementsByClassName("form-btn")

  for(const btn of formBtns){
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
    btn.classList.add("border-gray-300")
  }
}
// add money feature
document.getElementById("add-money-btn").
  addEventListener("click", function(e){
    e.preventDefault()
    const bank = getInputValue("bank");
    const accountNumber = document.getElementById("account-number").value;
    const amount = getInputValueNumber("add-amount");
})
const bank = getInputValue("bank");
const accountNumber = document.getElementById("account-number").value;
const amount = getInputValueNumber("add-amount");
const pinNumber = getInputValueNumber("add-pin");

const availableBalance = getInnerText("available-balance");

if(accountNumber.length < 11){
  alert("Invalid account Number");
  return;
}
if(pinNumber !== validPin){
  alert("Invalid pin Number");
  return;
}

const totalNewAvailableBalance = amount + availableBalance;

setInnerText(totalNewAvailableBalance);
setInnerText(totalNewAvailableBalance);

const data = {
  name: "Add Money",
  date: new Date().toLocaleTimeString()
}

transactionData.push(data);

// cashout money feature
document.getElementById("withdraw-btn").
  addEventListener("click", function(e){
    e.preventDefault()

    const amount = getInputValueNumber("withdraw-amount");
    const availableBalance = getInnerText("available-balance");

    const totalNewAvailableBalance = availableBalance - amount;

    console.log(totalNewAvailableBalance);
})
const data = {
  name: "Cashout",
  date: new Date().toLocaleTimeString()
}
transactionData.push(data);
console.log(transactionData);

document.getElementById("transactions-button").
  addEventListener("click", function(){
    console.log(transactionData);
})

// toggling feature
document.getElementById("add-button").addEventListener("click", function(){
  handleToggle("add-money-parent");
  handleButtonToggle("add-money-btn");
});
for(const data of transactionData){
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="bg-white rounded-xl p-3 flex justify-between items-center">
      <div class="flex items-center">
        <div class="p-3 rounded-full bg-[#f4f5f7]">
          <img src="/assets/wallet1.png" class="mx-auto" alt="" />
        </div>
        <div class="ml-3">
          <h1>${data.name}</h1>
          <p>${data.date}</p>
        </div>
      </div>
    </div>
  `;
}

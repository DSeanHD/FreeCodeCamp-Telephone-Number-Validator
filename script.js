let userInput = document.getElementById("user-input");
let checkBtn = document.getElementById("check-btn");
let clearBtn = document.getElementById("clear-btn");
let resultsDiv = document.getElementById("results-div");

function checkNumber() {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

  if (userInput.value == "") {
    return alert("Please provide a phone number");
  }

  let item = document.createElement("li");
  resultsDiv.appendChild(item);

  if (regex.test(userInput.value)) {
    item.innerHTML = "Valid US number: " + userInput.value;
    item.classList.add("valid");
    userInput.value = "";
  } else {
    item.innerHTML = "Invalid US number: " + userInput.value;
    item.classList.add("invalid");
    userInput.value = "";
  }
}

checkBtn.addEventListener("click", checkNumber);

clearBtn.addEventListener("click", () => {
  resultsDiv.innerHTML = "";
})

userInput.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    checkNumber();
  }
})

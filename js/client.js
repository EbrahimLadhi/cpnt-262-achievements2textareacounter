
const textArea = document.querySelector("textarea");

const counter = document.querySelector(".counter");

const limit = textArea.getAttribute("maxlength");

const calculate = function () {
  const count = textArea.value.length;
  
  counter.textContent = `${count}/${limit}`
}

textArea.addEventListener("input", calculate);
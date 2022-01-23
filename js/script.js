let calc = () => {
  let valueOne = Number(document.getElementById("valueOne").value);
  let valueTwo = Number(document.getElementById("valueTwo").value);
  let result = document.getElementById("result");
  let operation = document.getElementById("operation").value;
  let calculate;
  let err = document.getElementById("err");

  err.innerHTML =
    !Number.isInteger(Math.round(valueOne)) ||
    !Number.isInteger(Math.round(valueTwo))
      ? "Please enter valid numbers"
      : null;
  if (err.innerHTML) {
    return;
  }
  switch (operation) {
    case "add":
      calculate = valueOne + valueTwo;
      break;
    case "subtract":
      calculate = valueOne - valueTwo;
      break;
    case "multiply":
      calculate = valueOne * valueTwo;
      break;
    case "divide":
      calculate = valueOne / valueTwo;
      break;
    case "modulus":
      calculate = valueOne % valueTwo;
      break;
    default:
      break;
  }
  result.value = calculate;
};

let calcButton = document
  .getElementById("calc")
  .addEventListener("click", calc);

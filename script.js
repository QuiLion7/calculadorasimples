const buttons = document.querySelectorAll(".button");
const currentOperandTextElement = document.querySelector(".operand");

currentOperandTextElement.innerHTML = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerHTML;
    if (Number(value >= 0 || value === "+" || value === "-" || value === "*" || value === "/")
    ) {
      insert(value);
    } else if (value === ".") {
      /*if (currentOperandTextElement.innerHTML.includes(".")) {
        return;
      } else {
        insert(value);
      }*/
      insert(value);
    } else if (value === "AC") {
      currentOperandTextElement.innerHTML = "";
    } else if (value === "DEL") {
      let qnt = currentOperandTextElement.innerHTML;
      currentOperandTextElement.innerHTML = qnt.substring(0, qnt.length - 1);
    }else if(value === '=') {
      let resultado = currentOperandTextElement.innerHTML;
      currentOperandTextElement.innerHTML = eval(resultado);
    }
  });
});

function insert(num) {
  currentOperandTextElement.innerHTML += num;
}

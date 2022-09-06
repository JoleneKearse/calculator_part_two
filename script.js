const body = document.querySelector("body");
const operandBtns = document.querySelectorAll("button[data-type=operand]");
const operatorBtns = document.querySelectorAll("button[data-type=operator]");
const output = document.getElementById("output");
let is_operator = false;

// prevent page reload
body.addEventListener("submit", (e) => {
    e.preventDefault();
});

operandBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (output.value == "0") {
            output.value = e.target.value;
        } else if (output.value.includes(".")) {
            output.value = output.value + "" + e.target.value.replace(".", "");
        } else if (is_operator) {
            is_operator = false;
        } else {
            output.value = output.value + "" + e.target.value;
        }
    });
});

operatorBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {});
});

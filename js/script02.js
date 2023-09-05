// // alert('Hi.....')
// console.log('bbbbb')
// console.log(1111)
// console.log(30+20)

// console.log(document.getElementById("num1").value)

// // alert(parseInt(document.getElementById("num1").value) + parseInt(document.getElementById("num2").value))

function showDti() {
  console.log("Welcome to DTI.....");
}

let btnSum = document.getElementById("btn-sum");
let showSum = document.getElementById("show-sum");
let btnCancel = document.getElementById("btn-cancel");

let btnRed = document.getElementById("btn-red");
let btnGreen = document.getElementById("btn-green");
let btnYellow = document.getElementById("btn-yellow");

let body = document.getElementsByTagName("body")

number1 = document.getElementById("num1");
number2 = document.getElementById("num2");

btnSum.addEventListener("click", function () {
  let sum = parseFloat(number1.value) + parseFloat(number2.value);
  showSum.innerHTML = sum;
});

btnCancel.addEventListener("click", function () {
  number1.value = "";
  number2.value = "";
  showSum.innerHTML = "????";
});

btnRed.addEventListener("click", function () {
    document.body.style.backgroundColor = "red"
});
btnGreen.addEventListener("click", function () {
    document.body.style.backgroundColor = "green"
});
btnYellow.addEventListener("click", function () {
    document.body.style.backgroundColor = "yellow"
});

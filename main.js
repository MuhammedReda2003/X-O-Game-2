let turn = "X";
let head = document.querySelector(".head");

let array = [];
function win() {
  function future(num1, num2, num3) {
    head.innerHTML = `${array[num1].innerHTML} Winer`;
    document.getElementById("box-" + num1).style.backgroundColor = "green";
    document.getElementById("box-" + num2).style.backgroundColor = "green";
    document.getElementById("box-" + num3).style.backgroundColor = "green";

    setInterval(function () {
      head.innerHTML += ".";
    }, 1000);
    setTimeout(function () {
      location.reload();
    }, 4000);
  }

  for (let i = 0; i < 10; i++) {
    array[i] = document.getElementById("box-" + i);
  }
  console.log(array);
  if (
    array[1].innerHTML == array[2].innerHTML &&
    array[2].innerHTML == array[3].innerHTML &&
    array[2].innerHTML != ""
  ) {
    future(1, 2, 3);
  } else if (
    array[4].innerHTML == array[5].innerHTML &&
    array[5].innerHTML == array[6].innerHTML &&
    array[6].innerHTML != ""
  ) {
    future(4, 5, 6);
  } else if (
    array[7].innerHTML == array[8].innerHTML &&
    array[8].innerHTML == array[9].innerHTML &&
    array[8].innerHTML != ""
  ) {
    future(7, 8, 9);
  } else if (
    array[1].innerHTML == array[4].innerHTML &&
    array[4].innerHTML == array[7].innerHTML &&
    array[4].innerHTML != ""
  ) {
    future(1, 4, 7);
  } else if (
    array[2].innerHTML == array[5].innerHTML &&
    array[5].innerHTML == array[8].innerHTML &&
    array[5].innerHTML != ""
  ) {
    future(2, 5, 8);
  } else if (
    array[3].innerHTML == array[6].innerHTML &&
    array[6].innerHTML == array[9].innerHTML &&
    array[6].innerHTML != ""
  ) {
    future(3, 6, 9);
  } else if (
    array[1].innerHTML == array[5].innerHTML &&
    array[5].innerHTML == array[9].innerHTML &&
    array[5].innerHTML != ""
  ) {
    future(1, 5, 9);
  } else if (
    array[3].innerHTML == array[5].innerHTML &&
    array[5].innerHTML == array[7].innerHTML &&
    array[5].innerHTML != ""
  ) {
    future(3, 5, 7);
  }
}

function add(id) {
  let eldiv = document.getElementById(id);
  if (turn === "X" && eldiv.innerHTML === "") {
    head.innerHTML = "O ";
    eldiv.innerHTML = "X";
    turn = "O";
  } else if (turn === "O" && eldiv.innerHTML === "") {
    head.innerHTML = "X ";
    eldiv.innerHTML = "O";
    turn = "X";
  }
  win();
}

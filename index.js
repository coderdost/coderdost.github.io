
function initCounter(id) {
  let count = 0;
  return function () {
    count++;
    document.getElementById(id).innerText = count;
  };
}
let counter1 = initCounter('btn1');
let counter2 = initCounter('btn2');



function initAddString(inputId, outputId) {
  let str = '';
  return function () {
    str += ' ' + document.getElementById(inputId).value;
    document.getElementById(inputId).value = '';
    document.getElementById(outputId).innerText = str;
  };
}

let strAdder1 = initAddString('text1', 'text-output1');
let strAdder2 = initAddString('text2', 'text-output2');

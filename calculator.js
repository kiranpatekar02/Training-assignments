var data = {
  operator: "",
  currLength: 0,
  currNum: 0,
  result: 0,
};
var operatorData = {
  plus: "",
  minus: "",
  mul: "",
  div: "",
  opIndexArray: [],
  min: "",
};
function takeInput(input) {
  document.getElementById("ip").value += input;
}
function showOutput() {
  solve();
}
function clearInput() {
  document.getElementById("ip").value = "";
}
function solve() {
  let ip = document.getElementById("ip").value;
  data.currLength = indOfCurrentOp(ip);
  data.currNum = Number.parseFloat(ip);
  data.result = data.currNum;
  while (data.currLength !== -1) {
    data.operator = ip[data.currLength];
    if (data.operator === undefined) {
      break;
    }
    ip = ip.slice(data.currLength + 1);
    data.currNum = Number.parseFloat(ip);
    performOperation(data.currNum, data.operator);
  }
  document.getElementById("ip").value = data.result;
}
function indOfCurrentOp(inp) {
  operatorData.plus = inp.indexOf("+");
  operatorData.minus = inp.indexOf("-");
  operatorData.mul = inp.indexOf("*");
  operatorData.div = inp.indexOf("/");
  operatorData.opIndexArray = [
    operatorData.plus,
    operatorData.minus,
    operatorData.mul,
    operatorData.div,
  ];
  operatorData.min = operatorData.plus;
  if (
    operatorData.plus !== -1 ||
    operatorData.minus !== -1 ||
    operatorData.mul !== -1 ||
    operatorData.div !== -1
  ) {
    for (let i = 0; i < operatorData.opIndexArray.length; i++) {
      if (operatorData.min === -1) {
        operatorData.min = operatorData.opIndexArray[i + 1];
        if (operatorData.min === undefined) {
          return -1;
        }
      }
      if (
        operatorData.opIndexArray[i] < operatorData.min &&
        operatorData.opIndexArray[i] !== -1
      ) {
        operatorData.min = operatorData.opIndexArray[i];
      }
    }
    return operatorData.min;
  } else {
    return -1;
  }
}
function performOperation(num1, op) {
  switch (op) {
    case "+":
      data.result += num1;
      break;
    case "-":
      data.result -= num1;
      break;
    case "*":
      data.result *= num1;
      break;
    case "/":
      data.result /= num1;
      break;
    default:
      break;
  }
  return data.result;
}
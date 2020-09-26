function showFibonacci() {
  let num1 = 0;
  let num2 = 1;
  let temp;
  let counter = 0;
  let finalResult = "";
  while (counter !== 101) {
    finalResult += num1 + " ,";
    temp = num1 + num2;
    num1 = num2;
    num2 = temp;

    counter++;
  }
  finalResult = finalResult.slice(0, finalResult.length - 1);
  document.getElementById("result").innerHTML = finalResult;
}
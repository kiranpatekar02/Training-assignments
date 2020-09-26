function combinations() {
    let inp = document.getElementById("inp").value;
    let temp = "";
    let finalResult = "";
    for (let i = 0; i < inp.length; i++) {
      for (let j = i; j < inp.length; j++) {
        temp += inp[j];
        finalResult += `${temp} , `;
      }
      temp = "";
    }
    finalResult = finalResult.slice(0, finalResult.length - 2);
    document.getElementById("result").innerHTML = finalResult;
  }
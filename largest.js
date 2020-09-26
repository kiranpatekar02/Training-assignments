function ans() {
  let arr = [-5, -2, -6, -8, -1];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  document.getElementById(
    "result"
  ).innerHTML = `Maximum number in [${arr}] is ${max}`;
}
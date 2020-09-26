function calculateArea() {
  let side1 = Number.parseInt(document.getElementById("side1").value);
  let side2 = Number.parseInt(document.getElementById("side2").value);
  let side3 = Number.parseInt(document.getElementById("side3").value);
  if (Number.isNaN(side1) || Number.isNaN(side2) || Number.isNaN(side3)) {
    window.alert("Please provide valid input !!");
    return;
  }
  let p = (side1 + side2 + side3) / 2; 
  let area = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));
  if (Number.isNaN(area)) {
    window.alert("Please provide valid input !!");
    return;
  }
  let msg = "Area of triangle is : ";
  document.getElementById("result").innerHTML = msg + area;
}
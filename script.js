function convert() {
  var temp_input = document.getElementById("temperature").value;
  var unit_from = document.getElementById("from-u").value;
  var unit_to = document.getElementById("to-u").value;
  if (isNaN(temp_input)) {
   document.getElementById("result").innerHTML = "Please Enter Valid Number";
   return;
  }
  var temp = parseFloat(temp_input);
  var result;
  switch(unit_from) {
    case "celsius":
   if (unit_to === "fahrenheit") {
    result = (temp * 9 / 5 + 32);
   } else if (unit_to === "kelvin") {
    result = (temp + 273.15);
   } else {
    result = temp;
   }
   break;
    case "fahrenheit":
   if (unit_to === "celsius") {
    result = ((temp - 32) * 5 / 9);
   } else if (unit_to === "kelvin") {
    result = ((temp + 459.67) * 5 / 9);
   } else {
    result = temp;
   }
   break;
    case "kelvin":
   if (unit_to === "celsius") {
    result = temp - 273.15;
   } else if (unit_to === "fahrenheit") {
    result = (temp * 9 / 5 - 459.67);
   } else {
    result = temp;
   }
   break;
  }
  document.getElementById("result").innerHTML = temp.toFixed(2) + " " + unit_from + " = " + result.toFixed(2) + " " + unit_to;
 }
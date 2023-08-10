// switch(expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }

let x = "0";

switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}

// -------------------------------------------------

let day = "monday";

switch (day) {
  case "monday":
    console.log("Today is monday");
    break;
  case "tuesday":
    console.log("Today is tuesday");
    break;
  case "wednesday":
    console.log("Today is wednesday");
    break;
  case "tuesday":
    console.log("Today is thursday");
    break;
  case "friday":
    console.log("Today is friday");
    break;
  case "saturday":
    console.log("Today is saturday");
    break;
  case "sunday":
    console.log("Today is sunday");
    break;
  default:
    console.log("Don't know what day is today!");
}

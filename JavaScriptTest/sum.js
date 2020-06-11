var nr1 = Number(window.prompt("Enter first nr: "));
var nr2 = Number(window.prompt("Enter second nr: "));
var nr3 = Number(window.prompt("Enter third nr: "));

var array = [nr1, nr2, nr3];
var sum = array.reduce(function (a, b) { return a + b;}, 0);

alert(sum);
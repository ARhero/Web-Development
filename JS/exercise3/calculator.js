var a = prompt("Enter the first number : ");
var b = prompt("Enter the second number : ");
var option = prompt("Enter the operation : \n1)Add\n2)Subtract\n3)Divide\n4)Multiply");
if (option == 1) {
    alert("The sum is " + Number(a) + Number(b));
}
else if (option == 2) {
    alert("The difference is " + Number(a) - Number(b));
}
else if (option == 3) {
    alert("The quotient is " + Number(a)/Number(b));
}
else if (option == 4) {
    alert("The product is " + Number(a)*Number(b));
}
else {
    alert("Wrong responce :(")
}
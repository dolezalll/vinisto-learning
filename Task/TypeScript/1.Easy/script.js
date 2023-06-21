var text = "Ahoj, jak se máš";
console.log(text);
function convertToString(value) {
    return value.toString();
}
console.log(convertToString(3));
function reverseString(value) {
    var result = "";
    for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
        var char = value_1[_i];
        result = char + result;
    }
    console.log(result);
    return result;
}
reverseString("Ahoj");
document.getElementById("result").innerHTML = "1) ".concat(text, ",     2) ").concat(convertToString(3), ",  3)  ").concat(reverseString("Ahoj"), " ");

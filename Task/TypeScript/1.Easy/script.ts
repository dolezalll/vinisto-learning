let text: string = "Ahoj, jak se máš";
console.log(text);


function convertToString(value : number): string {
  return value.toString();
}

console.log(convertToString(3));


function reverseString(value: string):string {

    let result = "";

    for (let char of value) {
        result = char + result;

    }
 console.log(result);
 return result;
}

    reverseString("Ahoj");



    document.getElementById("result").innerHTML = `1) ${text},     2) ${convertToString(3)},  3)  ${reverseString("Ahoj")} `;

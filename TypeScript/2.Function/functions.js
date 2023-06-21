// typovani
function add(x, y) {
    return x + y;
}
// volitelne paramertry
function retrunName(name, surname) {
    if (surname)
        return name + ' ' + surname;
    else
        return name;
}
var nameWithoutSurname = retrunName("Jack");
var nameWithSurname = retrunName("Jack", "Doe");
//  volitelne parametry , predefinovany parametr
function returnNameWithPredefinedParameter(name, surname) {
    if (surname === void 0) { surname = "Doe"; }
    return name + " " + surname;
}
var nameWithPredefinedParameter = returnNameWithPredefinedParameter("Jack");
// libovolny pocet parametru 
function returnPerson(name, surname, age, anyParam1, anyParam2) {
    return name + " " + surname + " " + age + " " + anyParam1 + " " + anyParam2;
}
var nameWithAnyParam = returnPerson("John", "Doe", 34, true, "Developer");
// libovolny pocet parametru  "pole"
function returnPersonWithHobby(name) {
    var hobby = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        hobby[_i - 1] = arguments[_i];
    }
    return name + "has a hobby" + hobby.join(", ");
}
var returnPersonHobby = returnPersonWithHobby("John", "Computer", "Karaoke", "Cooking");
function searchAddress(street, city) {
    if (typeof street !== 'number') {
        console.log("Adress is ".concat(street, ", ").concat(city, ". "));
    }
    else if (typeof street !== 'string') {
        console.log("".concat(city, " is without street, but house number is ").concat(street));
    }
}
searchAddress('Nad papirnou 111', 'Teplice');
searchAddress(122, 'Teplice');

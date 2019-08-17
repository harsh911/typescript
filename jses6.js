//use 
//tsc *.ts --watch 
// to auto compile this code
var variable = "a variable";
//Block level scope
function reset() {
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
//arrow functions
console.log("Arrow functions");
var add = function (num1, num2) {
    return num1 + num2;
};
console.log(add(3, 5));
var mult = function (num1, num2) { return num1 * num2; };
console.log(mult(3, 6));
console.log("default parameters");
var count = function (start, end) {
    if (start === void 0) { start = 5; }
    if (end === void 0) { end = start + 5; }
    while (start > 0) {
        start--;
    }
    console.log(start);
    console.log(end);
};
count();
console.log("SPREAD and REST");
var numbers = [34, 67, 55, 23, 93];
//console.log(Math.max(numbers);    //wont work without spread operatora as it expects a list
console.log(Math.max(34, 67, 55, 23, 93));
console.log(Math.max.apply(Math, numbers));
// using the spread operator as an rest operator for passing arrays
function arr() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(arr(30, 70, 22, 66, 55));
console.log("DESTRUCTURING ARRAYS");
//can be used to get values out of arrays
var myhobbies = ["Coding", "Reading", "Sports"];
var x = myhobbies[0], y = myhobbies[1], z = myhobbies[2];
console.log(x, y, z);
console.log('Destructuring objects');
var user = { name: "Harsh", age: 20 };
var names = user.name, myage = user.age;
console.log(names, myage);
console.log("Template literals using ` and $");
var name1 = "Harsh";
var age = 20; //  `${}`
var greet = "Hello im " + name1 + "\nand my age is " + age + "\nAnd thats it";
console.log(greet);

//use 
//tsc *.ts --watch 
// to auto compile this code


let variable = "a variable";
//Block level scope
function reset() {
    let variable = null;
    console.log(variable);
}
reset();
console.log(variable);

//arrow functions
console.log("Arrow functions")
const add = function(num1: number, num2: number) :number{
    return num1 + num2;
}
console.log(add(3,5));

const mult = (num1: number, num2: number) => num1 * num2;
console.log(mult(3,6));

console.log("default parameters");
const count = (start : number = 5, end = start + 5) => {
    while(start>0){
        start--;
    }
    console.log(start);
    console.log(end);
}
count();

console.log("SPREAD and REST");
const numbers = [34, 67, 55, 23, 93];
//console.log(Math.max(numbers);    //wont work without spread operatora as it expects a list
console.log(Math.max(34, 67, 55,23, 93));
console.log(Math.max(...numbers));

// using the spread operator as an rest operator for passing arrays
function arr(...args: number[]){
    return args;
}
console.log(arr(30, 70, 22,66,55));

console.log("DESTRUCTURING ARRAYS");
//can be used to get values out of arrays
const myhobbies = ["Coding","Reading","Sports"];
const [x,y,z] = myhobbies;
console.log(x,y,z);

console.log('Destructuring objects');
const user = {name:"Harsh",age: 20};
const {name: names, age: myage} = user;
console.log(names,myage);

console.log("Template literals using ` and $");
const name1 = "Harsh";
const age  = 20;  //  `${}`
const greet = `Hello im ${name1}
and my age is ${age}
And thats it`;
console.log(greet);




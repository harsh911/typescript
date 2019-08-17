"use strict";
var myName = 'MAX';
//myName = 41;
console.log(myName);
var num; // any is a special type that allows change in type during assignment
num = 25;
num = '56';
var n; //type number
n = 27.5;
//n = '67';  // will now give error
//array
var hobbies = ["Cooking", 'Sports'];
console.log(hobbies);
console.log(typeof hobbies); //will give type as object
//hobbies = [100]; //will give error as typescript has automatically assigned it as type string
//tuples - array of mixed type
var address = ["add1", 55];
//let address: [string,number] = [55,"add1"];  //will give error since its not in order
//enum
var color;
(function (color) {
    color[color["Red"] = 100] = "Red";
    color[color["Green"] = 101] = "Green";
    color[color["Blue"] = 102] = "Blue";
})(color || (color = {}));
var mycolor = color.Green;
console.log(mycolor);
//functions
function myname() {
    return myName;
    //return num; will give type error
}
console.log(myname());
//argument type functions
function mul(val1, val2) {
    return val1 * val2;
}
console.log(mul(2, 4));
//function types
var myMulti;
myMulti = myname; // function used as a type 
console.log(myMulti());
myMulti = mul;
console.log('result is ' + myMulti(5, 2));
var myMult;
//console.log(myMult());
myMulti = mul;
console.log('result is ' + myMulti(5, 2));
//objects
var userData = {
    name: "harsh",
    age: 20
};
//userData = {}; //will give error as the type is set as an object
console.log(userData);
//complex object
var complex = {
    data: [100, 200, 300],
    output: function (all) {
        console.log(all);
        return this.data;
    }
};
//complex = {};  will give error
//union types
var uni; //   | used to select 2 datatypes
uni = 15;
uni = '15';
// uni = true; will give error
function neverReturns() {
    throw new Error('An error!');
}
//nullable types
//let canbenull = 12;  
//canbenull = null; //will give error
//let canbenull = 12: number | null;   //will not give error
var canbenull;
canbenull = null;

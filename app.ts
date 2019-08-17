let myName = 'MAX';
//myName = 41;
console.log(myName);

let num : any;   // any is a special type that allows change in type during assignment
num = 25;
num = '56';

let n : number; //type number
n = 27.5;
//n = '67';  // will now give error

//array
let hobbies = ["Cooking",'Sports'];
console.log(hobbies);
console.log(typeof hobbies); //will give type as object
//hobbies = [100]; //will give error as typescript has automatically assigned it as type string

//tuples - array of mixed type
let address: [string,number] = ["add1", 55];
//let address: [string,number] = [55,"add1"];  //will give error since its not in order

//enum
enum color {
    Red = 100,   //if not initialised gets value 1
    Green, //will have value 101 now
    Blue
}

let mycolor: color = color.Green;
console.log(mycolor);

//functions
function myname() : string{
    return myName;
    //return num; will give type error
}
console.log(myname());

//argument type functions
function mul(val1 :number,val2: number ) : number {
    return val1 * val2;
}
console.log(mul(2,4));

//function types
let myMulti;
myMulti = myname;   // function used as a type 
console.log(myMulti());
myMulti = mul;
console.log('result is ' + myMulti(5,2));

let myMult : (a: number, b: number) => number;  
//console.log(myMult());
myMulti = mul;
console.log('result is ' + myMulti(5,2));

//objects
let userData: {name: string, age: number} = {
    name : "harsh",
    age: 20
};
//userData = {}; //will give error as the type is set as an object
console.log(userData);

//complex object
let complex: {data: number[], output: (all:boolean) => number[]} = {
    data: [100,200,300],
    output: function (all: boolean): number[] {
        console.log(all);
        return this.data;
    }
};
//complex = {};  will give error

//union types

let uni : number | string; //   | used to select 2 datatypes
uni = 15;
uni = '15';
// uni = true; will give error

function neverReturns() : never {
    throw new Error('An error!');
}

//nullable types
//let canbenull = 12;  
//canbenull = null; //will give error
//let canbenull = 12: number | null;   //will not give error
let canbenull;
canbenull = null;



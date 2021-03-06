// use tsc class.ts --watch

class Person{
    name: string;
    private age: number = 15;
    protected gender : string;

    constructor(name: string, public userName:string ){
        this.name = name;
        this.gender = "Male";
        this.age = 20;
    }
    printAge(){
        console.log(this.age);                
    }
    printGender(){
        console.log(this.gender);                
    }
    setAge(age:number){
        this.age= age;
    }
    setGender(gender: string){
        this.gender = gender;
    }
}

const person = new Person("Harshad","Harsh");
console.log(person.name,person.userName);
person.printAge;
person.printGender();
person.setGender("Alpha Male");
person.printGender();


class Harsh extends Person {
    name = "Babu";
}
const newHarsh = new Harsh("Harshad","harshped");   
console.log(newHarsh.name);  //will print Babu as the constructor is of superclass Person but in subclass we have an value set for it


class Man extends Person {
    name = "Babu";
    manAge : number = 50;
    constructor(user:string){
        // we cannot have constructors for subclasses without using the super() to call parent constructor
        super("Goodman","Gman");
        this.userName = user;
        this.gender = "Man";
        //this.age = 50;     --will not wor since it is private
        this.setAge(35); //this will work
        this.manAge = 10;
    }
}
const man = new Man("BadMan");   
console.log(man);  

console.log("GETTERS and SETTERS");
class Plant{
    private _species: string = "nothing here";
    get species(){
        return this._species;
    }

    set species(value:string){
        if(value.length > 3){
            this._species = value;
        }else{
            this._species = "Default";
        }
    }
}
// will give error so run again using tsc class.ts --target es6 --watch
let plant = new Plant();
console.log(plant.species);  //accessed without underscore -- getter called
plant.species = "sas";
console.log(plant);
plant.species = "Lily";
console.log(plant);

console.log('STATIC');
//sometimes we need to access properties and methods of classes without instantiating it using the new keywrd

class Helper{
    static PI:number = 3.14;
    static calArea(radius:number){
        return 2*this.PI*radius;
    }
}
console.log("Area is "+ (2*Helper.PI*5));
console.log(Helper.calArea(10));


console.log("ABSTRACT CLASSES");
abstract class Project{
    projectName :string = "Project";
    budget: number = 2000;  

    abstract changeName(name:string):void ;

    calBudget() {
        return this.budget + 1000;
    }
}
class FinalProject extends Project{
    changeName(name:string):void {
        this.projectName = name;
    }
}

let newProject = new FinalProject();  
console.log(newProject);
newProject.changeName("Smart Cart");
console.log(newProject);

// watch the video for private constructors and singleton classes
// to ame a property read only use 
//             public readonly varName:string
// also remove the setters if present any. now we can only read thsi property outside the class and seetting can only be done inside the constructor




let bankAcc: {money:number,deposit:(value: number)=> void} = {
    money :3000,
    deposit(value) {
        this.money += value;
    }
};

let myself = {
    name: "harsh",
    bankAcc: bankAcc,
    hobbies : ["sports","cooking"]
};

myself.bankAcc.deposit(4000);

console.log(myself);


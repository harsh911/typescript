"use strict";
var bankAcc = {
    money: 3000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "harsh",
    bankAcc: bankAcc,
    hobbies: ["sports", "cooking"]
};
myself.bankAcc.deposit(4000);
console.log(myself);

// example
// let balance = 1000;
// function myBalance(){
//     balance += 100;
//     console.log(balance);
// }
// myBalance();

function mybal(){
    let balance = 1000;
    function addBal(){
        balance += 10;
        console.log(balance);
    }
    return addBal;
}
let total = mybal();
total();
balance = 5000;
total();
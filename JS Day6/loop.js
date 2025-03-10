for(let i=1; i<=100 ; i++){
    if(i%2==0){
        console.log(i);
    }
}

let num = 61;
do {
    console.log(num);
    num++;
}while (num<=4);


let roll = 0;
let count = 0;

while (roll !== 4) {
    roll = Math.floor(Math.random() * 6) + 1;
    count++;
    console.log(`Roll ${count}: ${roll}`);
}

console.log(`It took ${count} rolls to get a 4.`);
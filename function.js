
function concantename(firstname, lastName){     // function parameter
    var fullName = firstname + " "+ lastName;
    return fullName;
}
let n = concantename(1,2)
console.log(n);



function arithmetic(num1, num2){
    let sum = num1 + num2
    return sum
}
let total = arithmetic(2,3)
console.log(total);


function EvenOddCheck(number){
    if(number%2==0)
        return "Even"
    else
        return "Odd"      

}
let check = EvenOddCheck(4);
console.log(check);


function factorial(Num2){
    if (Num2 === 0 || Num2 === 1) {
        return 1;
    } else {
        return Num2 * factorial(Num2 - 1);
    }
}

console.log(factorial(5));

function sumArray(Number3){
    let sum = 0;
    for (let i = 0; i < Number3.length; i++) {
      sum+=Number3[i]
        
    }
    return sum;
}

console.log(sumArray([1,2,3,4,5,6]));


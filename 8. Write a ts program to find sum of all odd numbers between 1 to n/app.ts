//8. Write a ts program to find sum of all odd numbers between 1 to n.

var a:number = 5
var b:number = 6
var c:number = 7

var allOdd = a+b+c
var firstTwoOdd = a+b
var lastTwoOdd = b+c
var firstLastOdd = a+c
if(a%2!==0 && b%2!==0 && c%2!==0){
    console.log("all are odd and sum is", allOdd);
    
}
else if(a%2!==0 && b%2!==0 && c%2==0){
    console.log("a & b are odd and sum is", firstTwoOdd);
}
else if(a%2==0 && b%2!==0 && c%2!==0){
    console.log("b & c are odd and sum is", lastTwoOdd);
}
else if(a%2!==0 && b%2==0 && c%2!==0){
        console.log("a & c are odd and sum is", firstLastOdd);
    
}
else{
    console.log("No odd Number");
    
}

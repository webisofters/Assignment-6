//23. Write a ts program to calculate factorial of a number.
var fact = 1;
var userNum = 5;
for (var index = 1; index <= userNum; index++) {
    fact = fact * index;
    console.log(fact);
}

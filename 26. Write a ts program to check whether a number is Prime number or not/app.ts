//26. Write a ts program to check whether a number is Prime number or not.



var num = 8

if(num==1){
    console.log("not prime");
    
}
else if(num<1){
    console.log("not prime");
}
else{
for (var i = 2; i< num; i++) {
    if(num%i==0){
        var res = `${num} is not prime number`;
    break;        
    }
    else{
        var res = `${num} is prime number`;
    }
}
 console.log(res);
    
}



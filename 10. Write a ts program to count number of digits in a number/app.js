//10. Write a ts program to count number of digits in a number.
function counting(n) {
    var count = 0;
    if (n >= 1)
        ++count;
    while (n / 10 >= 1) {
        n /= 10;
        ++count;
    }
    return count;
}
console.log(counting(45001245));

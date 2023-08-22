function HighestDigit(num) {
    let max = 0;
    while (num > 0) {
        if (num % 10 > max) {
            max = num % 10;
        }
        num = Math.floor(num / 10);
    }
    return max;
}

 console.log(HighestDigit(379));
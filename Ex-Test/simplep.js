function simplepair(arr, targetProduct) {
    const seen = {}; 

    for (let i = 0; i < arr.length; i++) {
        const quotient = targetProduct / arr[i];
        if (seen[quotient] !== undefined) {
            return [arr[i], quotient];
        }
        seen[arr[i]] = i;
    }

    return [null]; 
}

console.log(simplepair([1, 2, 3], 3)); 

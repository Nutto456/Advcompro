function frequencysort(str) {
    let freq = {};
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (freq[str[i]]) {
            freq[str[i]]++;
        } else {
            freq[str[i]] = 1;
        }
    }
    for (let key in freq) {
        arr.push([key, freq[key]]);
    }
    arr.sort((a, b) => b[1] - a[1]);
    let res = "";
    for (let i = 0; i < arr.length; i++) {
        res += arr[i][0].repeat(arr[i][1]);
    }
    return res;
}

console.log(frequencysort("tree"));
console.log(frequencysort("cccaaa"));
console.log(frequencysort("Aabb"));
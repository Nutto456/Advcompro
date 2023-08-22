// jumpingfrog(5, [1, 1, 1, 1, 1]) => 6 
// jumpingfrog(5, [1, 3, 1, 1, 1]) => 4
// jumpingfrog(5, [1, 1, 0, 1, 1]) => "no chance :-("

function jumpingfrog(n, arr) {
    let i = 0;
    let count = 1;
    while (i < arr.length) {
        if (arr[i] === 0) {
            return "no chance :-(";
        }
        i += arr[i];
        count++;
    }
    return count;
}

console.log(jumpingfrog(5, [1, 1, 1, 1, 1]));
console.log(jumpingfrog(5, [1, 3, 1, 1, 1]));
console.log(jumpingfrog(5, [1, 1, 0, 1, 1]));
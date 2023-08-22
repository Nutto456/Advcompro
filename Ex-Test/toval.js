function TotalVolumeofAllBoxes(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let volume = 1;
        for (let j = 0; j < arr[i].length; j++) {
            volume *= arr[i][j];
        }
        sum += volume;
    }
    return sum;
}

console.log("totalvolume",TotalVolumeofAllBoxes([[4, 2, 4], [3, 3, 3], [1, 1, 2],[2, 1, 1]]));
console.log("totalvolume",TotalVolumeofAllBoxes([[2, 2, 2], [2, 1, 1]]));
console.log("totalvolume",TotalVolumeofAllBoxes([[1, 1, 1]]));
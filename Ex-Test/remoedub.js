function removeduplicatesarray(arr) {
  var temp = [];
  for (var i = 0; i < arr.length; i++) {
    if (temp.indexOf(arr[i]) == -1) {
      temp.push(arr[i]);
    }
  }
  return temp;
}

console.log(removeduplicatesarray([1, 0, 1, 0]));
console.log(removeduplicatesarray(["The", "big", "cat",]));
console.log(removeduplicatesarray(["John", "Taylor", "John"]));
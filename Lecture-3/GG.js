function compareArrays() {

    let array1 = ['Apple', 1, false];
    let array2 = ['Fries', 2, true];
    let array3 = ['Mars', 9, 'Apple'];
    // Get the intersection of all three arrays
    let compareArrays = array1.filter(element => array2.includes(element));
    let compareArrays2 = array1.filter(element => array3.includes(element));
    let compareArrays3 = array2.filter(element => array3.includes(element));
  
    // Print the common elements
    console.log('Common elements:',compareArrays, compareArrays2, compareArrays3);
  }
  
  // Example arrays

  
  // Compare the arrays
  compareArrays();
  
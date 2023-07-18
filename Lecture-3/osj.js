// Object format
const book = {
        title: "1984",
        author: "George Orwell",
        isAvailable: false
};

// Converted to Json
const bookJSON = JSON.stringify(bookObj);
console.log(bookJSON)
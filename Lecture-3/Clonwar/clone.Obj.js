// Object clonning
// Obj Ref, Obj Clonning assing(), {... x}, JSON
//
const obj1 = {
    person : 'Nuttpat',
    weight : 115
}

//const obj2 = obj1;
//const obj2 = Object.assing({},obj1);
const obj2 = {... obj1};
obj2.weight = 105
console.log(obj1);
console.log(obj2);
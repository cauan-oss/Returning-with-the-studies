/* 1 For to build a array */

const firstArray = ["arroz", "feijão preto", "sucrilhos", "ovos"]
console.log(firstArray)

/* 2 Accessing elements of an array */
console.log(firstArray[2])

/* 3 to alter value of an array */
firstArray[1] = "feijao branco"
console.log(firstArray)

/* to add and remove elementos of an array */
// push()
firstArray.push('Cotonetes');

// unshift()
firstArray.unshift('Água de Coco');

// pop()
firstArray.pop();

// shift()
firstArray.shift();

/*  length of array */
// console.log(firstArray[firstArray.length - 1])

console.log(firstArray[1])

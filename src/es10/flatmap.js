let array = [1, 2, 3, 4, 5, 6];

let newArray = array.flatMap((e) => [e, [e*2], e*3]);

console.log(newArray[0]);

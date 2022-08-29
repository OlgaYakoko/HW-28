'use strict';

const saveNumb = () => {
    let res = 0; 
    return (a) => {
        res += a;
        return res;
    }
}

const sum = saveNumb();

console.log(sum(3));
console.log(sum(5));
console.log(sum(8));






















// const getAdder =  () => { 
//     let res = 0; 
//     return (x) => {res += x; return res;} 
// }
// const sum = getAdder();
// console.log(sum(1)); // 1
// console.log(sum(5)); // 4
// console.log(sum(6)); // 4
// console.log(sum(7)); // 4
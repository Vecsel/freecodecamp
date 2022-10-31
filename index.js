// /*
// let str='m,o,u,s,eme'
//
// console.log(str.split(',').reverse().join('y'))*/
let str='memgdhf'
let arrr=[1,2,3,4,5,6,7,8,9]
const arr = [...str]
console.log([...arrr,...arr])

let reverse= "";

while(arr.length){
    reverse = reverse + arr.pop()
}

console.log(reverse)
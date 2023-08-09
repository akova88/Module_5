// if (Array.prototype.sum == undefined){
//     Array.prototype.sum = function () {
//         let total = 0;
//         for(let i = 0; i < numbers.length; i++) {
//             total += numbers[i];
//         }
//         return total;
//     }
// }

if ( Array.prototype.sum == undefined){
    Array.prototype.sum = function(){
        let total = 0;
        for( let i = 0; i < this.length; i++){
            total += this[i];
        }
        return total;
    }
}

let numbers = [4, 3, 3, 56, 5]
let numbers_2 = [4, 3, 3, 56, 6]
console.log(numbers.sum());
console.log(numbers_2.sum());


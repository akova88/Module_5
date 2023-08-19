// let width: number;
// let height: number;
//
// width = 10.5;
// height = 20;
//
// let area: number = width*height;
// console.log(`Diện tích hình chữ nhật: ${area}`);

let sum: number = 0;
let count: number = 0;
for (let i = 2; count < 30; i++) {
    let isPrime: boolean = true;
    if (i == 2) {
        sum += i;
        count++;
        continue;
    }
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if(!isPrime){
        continue;
    }
    sum += i;
    count++;
}
console.log(sum);
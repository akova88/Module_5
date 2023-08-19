// let width: number;
// let height: number;
//
// width = 10.5;
// height = 20;
//
// let area: number = width*height;
// console.log(`Diện tích hình chữ nhật: ${area}`);
var sum = 0;
var count = 0;
for (var i = 2; count < 30; i++) {
    var isPrime = true;
    if (i == 2) {
        sum += i;
        count++;
        continue;
    }
    for (var j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (!isPrime) {
        continue;
    }
    sum += i;
    count++;
}
console.log(sum);

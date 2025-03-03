// Напишите рекурсивную функцию, которая принимает число и возвращает сумму всех нечетных чисел из промежутка до этого числа включительно.

const sumOddNumbers =(n) => {
    let sum = 0;
    if (n < 0) {
        n = n * -1;
    }

    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }

    return sum;
}

console.log(sumOddNumbers(5));
console.log(sumOddNumbers(10));
console.log(sumOddNumbers(1));
console.log(sumOddNumbers(-1));
console.log(sumOddNumbers(-5));
console.log(sumOddNumbers(-10));
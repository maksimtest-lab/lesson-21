// Напишите рекурсивную функцию factorial, которая принимает число в качестве аргумента и возвращает его факториал. Факториал числа n (обозначается как n!) - это произведение всех натуральных чисел от 1 до n.

const factorial = (n) => {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
console.log(factorial(10)); // 3628800
console.log(factorial(1)); // 1
// Напишите рекурсивную функцию findMax, которая принимает массив чисел и возвращает максимальное число из этого массива. Функция должна использовать рекурсию для обхода всех элементов массива и сравнения их со значением максимального числа.

const findMax = (arr) => {
    let max = 0;
    if (typeof arr != 'object') {
        return;
    }

    if (arr.length === 1) {

        return arr[0];
    } else {
        for (let num of arr) {
            if (typeof num == 'object') {
                num = findMax(num);
            }

            if (num > max) {
                max = +num;
            }
        }

        return max;
    }

    return;
}

console.log(findMax([1, 2, 3, 4, 5]));
console.log(findMax(""));
console.log(findMax(["1", 2, 3, 4, 5, "99"]));
console.log(findMax(["1", 2, [22, 33, [102, 103]], 4, 5, "99"]));
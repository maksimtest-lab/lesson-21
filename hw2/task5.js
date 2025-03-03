//  Напишите рекурсивную функцию flattenArray, которая принимает массив, содержащий вложенные массивы, и возвращает одномерный массив, в котором все элементы расположены последовательно.

// Например, для массива [1, [2, [3, 4], 5], 6] функция должна вернуть [1, 2, 3, 4, 5, 6].

// Для решения этой задачи нельзя использовать метод flat().

const flattenArray = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'object') {
            result.push(...flattenArray(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
};

console.log(flattenArray([1, [2, [3, 4], 5], 6]));
console.log(flattenArray([1, [2, [3, 4, [1, 2, 3]], 5], 6]));
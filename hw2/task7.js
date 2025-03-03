// Напишите рекурсивную функцию binarySearch, которая принимает отсортированный массив чисел и целевое число в качестве аргументов и возвращает индекс целевого числа в массиве. Если число не найдено, функция должна вернуть -1. Используйте метод деления пополам для ускорения поиска.

const binarySearch = (arr, target) => {
    if (arr.length === 0) {

        return -1;
    }

    const middle = Math.floor(arr.length / 2);

    if (arr[middle] === target) {

        return middle;
    } else if (arr[middle] < target) {

        return binarySearch(arr.slice(middle + 1), target);
    } else {

        return binarySearch(arr.slice(0, middle), target);
    }
}

console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 3, 4, 5], 6));
console.log(binarySearch([1, 2, 3, 4, 5], 0));
// Напишите рекурсивную функцию deepClone, которая принимает объект и создаёт его глубокую копию. Глубокая копия означает, что все вложенные объекты и массивы также должны быть скопированы, а не просто переданы по ссылке.

const deepClone = (obj) => {
    const newObj = {};
    for (let key in obj) {
        if (typeof obj[key] === 'object' && !obj[key]) {
            newObj[key] = deepClone(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

const one = {
    name: 'Iphone',
    isLastIphone: true, // вложенный объект
    price: 1000,
    address: {
        city: 'Minsk',
        street: 'Lenina'
    }
};

const two = deepClone(one);
two.name = 'Samsung';

console.log(one);
console.log(two);

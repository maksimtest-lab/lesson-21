// Напишите рекурсивную функцию isPalindrome, которая принимает строку в качестве аргумента и проверяет, является ли она палиндромом. Палиндром - это слово или фраза, которые одинаково читаются слева направо и справа налево, игнорируя пробелы, знаки препинания и регистр символов. Например, "level", "madam" и "A man, a plan, a canal: Panama!" являются палиндромами.

function isPalindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome('level')); // true
console.log(isPalindrome('madam')); // true
console.log(isPalindrome('A man, a plan, a canal: Panama!')); // true

console.log(isPalindrome('123')); // false
console.log(isPalindrome('hello')); // false
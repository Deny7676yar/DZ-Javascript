//5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
//где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
//переданного значения операции (использовать switch) выполнить одну из арифметических
//операций
//(использовать функции из задания 4) и вернуть полученное значение.

'use strict';
/**
 * Функция операции сложения
 * @param {*} a 
 * @param {*} b 
 * @returns сумму
 */
 function sumNumb(a, b){
    return a + b
}

/**
 * Функция вычитания
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function substractingNumb(a, b) {
    return a - b
}

/**
 * Функция деления
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function divisionNumb(a, b) {
    return a / b
}

/**
 * Функция умножения
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function multiplicationNumb(a, b){
    return a * b
}

/**
 * Функция арефметический операций
 * @param {*} arg1 
 * @param {*} arg2 
 * @param {*} operation может быть "+", "-", "/", "*";
 * @returns numbers
 * @throws {Error} если операция не определена то возвращается ошибка
 */
function mathOperation(arg1, arg2, operation){
    switch(operation){
        case "+" :
            return sumNumb(arg1, arg2);
        case "-" :
            return substractingNumb(arg1, arg2);
        case "/" :
            return divisionNumb(arg1, arg2);
        case "*" :
            return multiplicationNumb(arg1, arg2);
        default:
            throw new Error("Операция"+ operation +"не предусмотрена");
    }

}
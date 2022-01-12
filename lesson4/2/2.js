'use strict'
/**
 * конструктор es5 который принимает параметры и имеет метод
 * для вычисления скидки 25%
 * @param {*} name - передается в виде строки 
 * @param {*} price - в виде числа
 */
function Product(name, price){
    this.name = name;
    this.price = price;
    
}

Product.prototype.make25PercentDiscount = function() {
    this.price = this.price * 0.75;
}


let productsOne = new Product('phone', 300);
productsOne.make25PercentDiscount();
console.log(productsOne);


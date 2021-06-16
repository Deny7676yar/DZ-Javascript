/**
 * конструктор es6 который принимает параметры и имеет метод
 * для вычисления скидки 25%
 * @param {*} name - передается в виде строки 
 * @param {*} price - в виде числа
 */
class Products {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount(){
        this.price = this.price * 0.75;
    }
}

let productsTwo = new Products('phone', 550);
productsTwo.make25PercentDiscount();
console.log(productsTwo);
'use strict'

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

const resultOne = products.filter(productsItem => "photos" in productsItem && productsItem.photos.length > 0);
console.log(resultOne);

const resultTow = products.sort((sortItem1, sortItem2) => sortItem1.price - sortItem2.price);
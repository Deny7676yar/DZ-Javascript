//6. Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
//олько у вашей горки должно быть 20 рядов, а не 5:

function slide(){
    for (let i = 1, outString = ''; i <= 20; i++) {
       console.log(outString += 'x');
     }
   }
// ЧИСЛА

// -100 - это по сути 100, но с унарным оператором МИНУС 

console.log(5);         // целочисленный литерал
console.log(5000);      // целочисленный литерал
console.log(123);       // целочисленный литерал
//числа, который записаны прямо в коде программа называются числовыми литералами

console.log(0xfffcc);    //шестнадцатиричный литерал. Возвращает 1048524. Сначала 0, потом x (x в любом регистре)
console.log(0345);       //восьмиричный литерал. Возвращает 229, начинается с 0
console.log(03458);      //если присутствует цифра больше 7, число становится десятиричным

console.log(12.45);     
console.log(.45);        //возвращает 0.45, ноль можно не писать
console.log(1.34e4);     // экспоненциальная запись. Число умноженное на степень после буквы "е" в любом регистре (экспонента)


let N = new Number(4000);       //это конструктор. Конструктор - это функция, которая создает новые объекты. Ей принято давать названия с БОЛЬШОЙ буквы
console.log(typeof N);          //возвращает object. Это объект

let n = 4000;                   
console.log(typeof n);          //возвращает number. Это число.

console.log(N.toFixed(5))       //возвращает 4000.00000. для объекта можно вызвать метод, который регулирует кол-во знаков после запятой. Сейчас он возвращает 4000.00000
console.log(n.toFixed(5))       //возвращает 4000.00000. но n - это число
console.log(4000 .toFixed(5))   //возвращает 4000.00000. но 4000 - это числовой литерал
//Вообще, методы можно вызывать только у объектов, но интерпретатор сам создает "объект обертку" для применения метода. Интерпретатор, например, берёт значение переменной n, сам применяет к ней конструктор Number (как мы сделали для N), затем уже вызывает метод toFixed. Далее он возвращает получившееся значение и удаляет "объект обертку". Именно благодаря этому простые значения могут вести себя как объекты, а не потому что "всё в ЖС - это объекты", это не так.


console.log(n.toExponential(5)) //приводит к экспоненциальной форме
console.log(n.toPrecision(5))   //вывод с определенной точностью



// Арифметические операторы
let i = 10;

console.log(+10);    //унарный плюс
console.log(-10);    //унарный минус

console.log(i++)     //оператор инкремента. ПОСТФИКСНЫЙ. Сначала возвращает значение, потом увеличивает значение на единицу
console.log(++i)     //оператор инкремента. ПРЕФИКСНЫЙ. Увеличивает значение на единицу и потом возвращает значение

console.log(i--)     //оператор декремента. ПОСТФИКСНЫЙ. Сначала возвращает значение, потом уменьшает значение на единицу
console.log(--i)     //оператор декремента. ПРЕФИКСНЫЙ. Уменьшает значение на единицу и потом возвращает значение

let j = 10;
console.log(j++)     //возвращает 10, хотя инркемент уже применен и j уже 11
console.log(j)       //возвращает 11 только сейчас, потому что инкремент постфиксный



//бинарные операторы
console.log(10+10);
console.log(70-13);
console.log(6*3);

console.log(10/3);  //Возвращает 3.3333333333333335. Деление не целочисленное и может возвращать вещественные числа.
console.log(10%3);  //Возвращает 1. Оператор % возвращает остаток от деления.

let m = 100;
m+=20;              
console.log(m);     //возвращает 120. Оператор += складывает операнды и возвращает результат. Также есть операторы: *=   /=    -=   То есть для всех бинарных операторов



//Операторы отношения
console.log(6 < 3);     
console.log(6 > 3);
console.log(6 >= 3);        // Возвращает true. Больше или равно
console.log(10 <= 10);      // Возвращает true. Меньше или равно

console.log(10 == '10');      //возвращает true. Проверка равенства с приведением. Сравнивая строку с числом, интерпретатор приведёт строку к числу и сравнит, если это возможно
console.log(10 === '10');     //возвращает false. Проверка равенства без приведения. Сравнивая строку с числом, сначала сравнит ТИПЫ. Если типы не равны, он выдаст false

console.log(10 !== 7);     //вернёт true. Проверка неравенства без приведения
console.log(10 !== 10);    //вернёт false. Проверка неравенства без приведения


// Объект Math
console.log(Math.sqrt(25));                 //Возвращает 5. Извлечение квадратного корня
console.log(Math.pow(5, 2));                //Возвращает 25. Возведение в степень. Первый аргумент - число возводимое в степень, второй аргумент - степень

console.log(Math.PI);                       //Возвращает число PI
console.log(Math.E);                        //Возвращает число E



// Бесконечности и NaN
console.log(typeof Infinity)                                // возвращает number. Бесконечность - число больше, чем 10^308. Infinity и NaN - это идентификаторы

console.log(10/0)                                           // возвращает Infinity
console.log(-10/0)                                          // возвращает -Infinity

console.log(0/0)                                            // возвращает NaN (Not a Number)
console.log(Infinity/Infinity)                              // возвращает NaN (Not a Number)
console.log(Math.sqrt(-25));                                // возвращает NaN (Not a Number)

console.log(NaN === 10);                                    // возвращает false. проверка равенства с NaN всегда возвращает false
console.log(NaN === NaN);                                   // возвращает false. проверка равенства с NaN всегда возвращает false



// Ошибки
console.log(0.2+0.1)                                        // Возвращает 0.30000000000000004
console.log(100000000000000002+100000000000000002)          // Возвращает 200000000000000000


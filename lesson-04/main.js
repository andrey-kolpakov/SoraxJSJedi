let myVariable;
// инструкция объявления (Declaration Statement)
// ключевое слово, идентификатор

let myVariableFirst = 123, myVariableSecond = 4434;
// можно объявлять переменные через запятую
// инициализация - задание первичных значений для переменной, как получается выше

let variable3, _var, $var;
// идентификаторы могут начинаться с буквы, с символа подчеркивания или со знака доллара. Не может начинаться с цифры.

//нельзя использовать в качестве идентификатора зарезервированные слова: break, delete, case, do, var, else и тд.

// JS - язык чувствительный к регистру (Case-Sensitive), т.е. myvar и myVar - разные идентификаторы

//Типы данных простые (primitive) и объектные (Object)



// ПРОСТЫЕ ТИПЫ:
let number = 123,           // числа (числовой литерал)
    myString = 'asdasd'     // строки (строковый литерал)
    myBool = true,          // логические значения/булевые (логический литерал)
    myNull = null,          // отсутствие значения (литерал null)
    myUndef = undefined;    // отсутствие значения (идентификатор)

//CamelCase myNewFirstIdentificator
//underscore my_new_first_identificator

console.log(number)
console.log(myString)
console.log(myBool)
console.log(myNull)
console.log(myUndef)
console.log('   ')

//унарный оператор typeof
console.log(typeof number)      //возвращает number
console.log(typeof myString)    //возвращает string
console.log(typeof myBool)      //возвращает boolean
console.log(typeof myNull)      //возвращает object (известная ошибка JS)
console.log(typeof myUndef)     //возвращает undefined
console.log('   ')

//сам typeof возвращает строку
console.log(typeof typeof number) //string


// Объектные типы или Объекты
let obj = {name: 'Andrey'},     //объекты
    array = [1,2,3],            //массивы
    regexp = /w+/g,             //регулярные выражения
    func = function(){};        //функции
    //для инициализации также используются литералы соответствующего типа

    console.log(typeof obj)     //возвращает object
    console.log(typeof array)   //возвращает object
    console.log(typeof regexp)  //возвращает object
    console.log(typeof func)    //возвращает Function

// переменные не имеют типа (untyped). Тип переменной автоматически определяется интерпретатором. В других языках, объявляя переменную определенного типа, ей уже нельзя присвоить значение другого типа.

// В JS есть автоматическое преобразование типа

// Типы в языке JS можно разделить на изменяемые (mutable) и неизменяемые (immutable). Все простые типы - неизменяемые. Объект и массив можно изменить:
obj.name = 'neAndrey'
array[2] = 4

// В случае например с:
console.log(myString.toUpperCase())         //возвращает ASDASD
// строка не меняется, а возвращается ДРУГАЯ строка с измененным регистром, изначальная строка не меняется, потому что простые типы - неизменяемые
console.log(myString)                       //возвращает asdasd


// ОПЕРАТОР ПРИСВАИВАНИЯ
// Оператор присваивания - оператор с побочным эффектом. Его побочный эффект - запись в переменную какого-либо значения.

let a,b,c,d;
a = b = c = d = 5;

//Присваивание происходит справа налево
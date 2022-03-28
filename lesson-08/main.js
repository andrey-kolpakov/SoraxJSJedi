console.log(typeof null)        //возвращает object - это ошибка
console.log(typeof undefined)   //возвращает идентификатор undefined

console.log(' ')

let temp                        //не инициализированная переменная
console.log(temp)               //возвращает undefined 

let obj = {}                    //несуществующее свойство
console.log(obj.property)       //возвращает undefined 

let array = []                  //несуществующий элемент массива
console.log(array[1])           //возвращает undefined

function greet(name){
    return 'Hello ' + name
}
console.log(greet('Man'))
console.log(greet())            //пустой аргумент переданный в функцию - также undefined

function check(name){
}
console.log(check())            //если функция ничего не возвращает, возвращаемым значением - будет undefined

console.log(null == undefined)          //равны потому что оба пустые
console.log(null === undefined)         //неравны без приведения типов, потому что тип данных разный
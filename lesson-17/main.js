let obj = {                                 //Объектный литерал. Это один из способов создания объекта
    name: 'Andrey',                             
    age: 25,
    gender: 'male',
    sayHi: function (){
        console.log('hi')                   //Значением свойства может быть функция, такое свойства называется методом
    }
}

console.log(obj.name)                       //Возвращает Andrey. Свойства объектов также можно называть "полями"
console.log(obj.name)                       //Это называется выражение обращения или выражение доступа. Property Access Expression


console.log(obj['name'])                      //Возвращает Andrey.
console.log(obj['age'])                       //25


obj.id = 1                                  //Таким образом добавляются свойства к объекту
obj.name = 'Dmitry'                         //Таким образом свойства изменяются

console.log(obj.id)                        //1     
console.log(obj['name'])                   //Dmitry
console.log(obj)                           //Измененный объект

console.log(' ')

obj.sayHi()                               //Выводит hi в консоль


console.log(' ')

let object = new Object();                //Можно создать объект с помощью конструктора
object.id = 2;
object.name = 'Alexandr'
console.log(object)                       //Возвращает id:2, name:Alexandr

console.log(' ')

delete object.id                          //Таким образом можно удалить только родные, ненаследованные свойства объекта
console.log(object)                       //Возвращает name:Alexandr

console.log(' ')

//Для проверки свойства у объекта есть бинарный оператор in. Не учитывает наследованное ли свойство или своё. Просто выдает есть или нет. Если у свойства значение == undefined, выдаст true. В свою очередь просто обращение выдаст undefined, как если бы свойства не было вообще
console.log('id' in object)       //false
console.log('name' in object)     //true


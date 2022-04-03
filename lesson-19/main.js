//АКСЕССОРЫ

//Аксессоры - это функции, которые используются для присвоения и получения значения, но во внешнем коде они выглядят как обычные свойства объекта
let person = {
    name: 'Andrey',
    _age: 10,
    _new: '',
    get age() { return ('Возраст: ' + this._age) },                                    //Геттер. Что выдавать при считывании свойства age 
    set age(value) { this._age = value < 0 ? 0 : value > 122 ? 122 : value }           //Сеттер. Что делать при записи свойства age.       Проверка: value Меньше нуля? Если да, тогда присвоить 0, если нет, то value больше 122? Если да, то присваивам 122, если нет, тогда присваивам value
}

person.age = 25
console.log(person.age) //25

person.age = 125
console.log(person.age) //122 (благодаря проверке)

console.log(' ')

// Свойства начинающиеся с _ - считаются внутренними и к ним не принято обращаться няпрмую извне объекта
// Обычно геттеру и сеттеру не дают побочных действий (например вывода в консоль или каких-то действий), это может привести к ошибкам






//ДЕСКРИПТОР

//Дескриптор - это объект, хранящий в себе атрибуты (флаги) свойства configurable, enumerable, value, writable. Флаги отвечают за некоторые особенности свойств в объекте.

//Object.getOwnPropertyDescriptor - статический метод для получения дескриптора свойства. Первый аргумент - объект, второй аргумент - ключ свойства
console.log(Object.getOwnPropertyDescriptor(person, 'name'))        //configurable: true, enumerable: true, value: "Andrey", writable: true
console.log(Object.getOwnPropertyDescriptor(person, 'age'))         //configurable: true, enumerable: true, get: ƒ age(), set: ƒ age(value)
//age не имеет свойств value и writable - потому что чтение происходит согласно функции get, а запись согласно функции set

//value - значение
//writable – если true, свойство можно изменить, иначе оно только для чтения.
//enumerable – если true, свойство перечисляется в циклах, в противном случае циклы его игнорируют.
//configurable – если true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.       

//Object.defineProperty - статический метод для определения или переопределения атрибутов (флагов) свойства. Первый аргумент - объект, второй - свойство, третий - новый дескриптор
Object.defineProperty(person, 'gender', {
    value: 'male',
    writable: false,
    enumerable: true,
    configurable: false
})

Object.defineProperty(person, 'new', {
    enumerable: true,
    configurable: false,
    get: function () {
        return this._new
    },
    set: function (value) {
        this._new = value
    }
})

person.new = 123

console.log(person.gender)      //male

person.gender = 'female'

console.log(person.gender)      //male

console.log(' ')






//for in
for (key in person) {               //Выводятся все ключи свойств объекта person, включая наследованные
    console.log(key, ': ', person[key])
}

console.log(Object.keys(person))     //Статический метод Object.keys также выводит ключи свойств, но в массиве
console.log(' ')





//Проверка свойства на расширяемость
let obj = {
    id: 1,
}
console.log(Object.isExtensible(obj)) //true

Object.preventExtensions(obj)         //Статический метод Object.preventExtensions запрещает расширяемость

obj.name = 123
console.log(Object.isExtensible(obj)) //false. Теперь в объект нельзя добавить новые свойства

Object.seal(obj)                      //Статический метод seal ставит флаг configurable в положение false, что запрещает еще и удалять свойства и изменять их дескриптор
console.log(Object.isSealed(obj))     //true. Проверка seal

Object.freeze(obj)                    //То же самое, что и seal, но еще и делает свойства доступные только для свойства, что означает, что имеющиеся нельзя изменять
console.log(Object.isFrozen(obj))     //true. Проверка на freeze







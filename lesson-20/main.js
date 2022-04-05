//Все объекты или объектный тип данных можно назвать ссылочным типом данных.

//Простые типы данных ХРАНЯТ значения
let a = 10, b = 20
console.log('b', b)
console.log('a', a)

console.log(' ')

b = a               //Несмотря на то, что прямо сейчас, b примет ЗНАЧЕНИЕ а, мы можем дальше поменять b на другое число и А никак не изменится.
console.log('b', b)
console.log('a', a)

console.log(' ')

b = 15
console.log('b', b)
console.log('a', a)


//Когда вы создаёте объект, переменная хранит ССЫЛКУ на объект
let objA = {x:10,}
let objB = {x:20,}
console.log('objB', objB)
console.log('objA', objA)

console.log(' ')

objB = objA
console.log('objB', objB)
console.log('objA', objA)

console.log(' ')

objB.x = 34                     //В отличии от независимых друг от друга переменных, объекты ссылаются на один и тот же объект после присвоения одного другому. Меняя объект В, мы меняем и объект А
console.log('objA', objA)

//ПРОТОТИПЫ И НАСЛЕДОВАНИЕ
//С помощью прототипа и наследования его свойств, можно создавать множество однотипных объектов на основе прототипа

//КЛАСС - в JS - условное понятие. Под классом понимается множество объектов, наследующие свойства от одного прототипа

let CatCreator = {    //прототип              
    constructor: function (name, weight, colour) {
        this.name = name
        this.weight = weight
        this.colour = colour
        return this
    },
    catGreet: function () {
        console.log('Меня зовут ' + this.name + '.')
        console.log('Мой цвет ' + this.colour + '.')
        console.log('Я вешу ' + this.weight + ' кг')
    }
}


//Эти три объекта ниже - имеют один класс, потому что наследуют свойства от одного прототипа
let marzipan = Object.create(CatCreator).constructor('Марципанчик', 4, 'черно-белый') //Экземпляр класса CatCreator
marzipan.catGreet()
console.log(' ')

let gypsy = Object.create(CatCreator).constructor('Рыжий бомжара', 3, 'рыжий') //Экземпляр класса CatCreator
gypsy.catGreet()
console.log(' ')

let secondGypsy = Object.create(CatCreator).constructor('Рыжий бомжара в ошейнике', 4, 'черно-белый') //Экземпляр класса CatCreator
secondGypsy.catGreet()
console.log(' ')






console.log(' ')





//Дочерний класс, прототипом которого является CatCreator - родительский
let CatWorker = Object.create(CatCreator);
CatWorker.constructor = function (name, weight, colour, skills) {
    CatCreator.constructor.apply(this, arguments) //Чтобы не переписывать всю функцию, обращаемся к изначальной, но передаем this через apply
    this.skills = skills

    return this
}
CatWorker.catGreet = function () {
    CatCreator.catGreet.apply(this)

    console.log('Я умею: ', this.skills)
}


//Экземпляры класса CatWorker, наследуют свойства от прототипа CatWorker
let maman = Object.create(CatWorker).constructor('Маманька', 5, 'черно-белый', ['лезать', 'муртять', 'кусять'])        
maman.catGreet()
console.log(' ')

let martin = Object.create(CatWorker).constructor('Мартин', 4, 'серенький', [
    'смотреть за ящерицей', 'кусаться', 'защищаться от подстригания когтей'])
martin.catGreet()
console.log(' ')



//Методы

console.log(CatWorker.isPrototypeOf(martin)) //true
console.log(CatCreator.isPrototypeOf(martin)) //true

console.log(CatCreator.isPrototypeOf(CatWorker)) //true проверяет ли является ли объект прототипом объекта, который отправлен в качестве аргумента


//Класс - это множество объектов, наследующих свои свойства от одного прототипа

let NewConstructor = function(name, alertFunction){
    this.name = name
    this.alertFunction = alertFunction
}

console.log(NewConstructor.prototype)           //.prototype возвращает прототип, от которого наследуют свойства все объекты, созданные этой функцией при помощи ключевого слова new
console.log(NewConstructor.constructor)         //свойство constructor



console.log(' ')



NewConstructor.prototype.callThis = function (){         //в .prototype можно добавлять новые свойства, которые будут доступны из всех дочерних объектов этого класса
    console.log(this)
}

let person = new NewConstructor('crasava', function(){
    console.log(this.name)
})
console.log(person)
person.alertFunction()



console.log(' ')



let secondPerson = new NewConstructor('krutoi', function(){
    console.log(this.name + ' new text')
})
console.log(secondPerson)
secondPerson.alertFunction()



console.log(' ')



console.log(secondPerson instanceof NewConstructor)         //true. проверяет первый операнд на принадлежность к классу, переданному во втором операнде. Класс определяется конструктором
console.log(NewConstructor.prototype.isPrototypeOf(secondPerson))       //true. аналогичную верхней проверку можно провести и таким образом





console.log(' ')




//Дочерние классы

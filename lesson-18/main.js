function greet(secondName = 'Jack') {           //Если аргументу дать значение, оно будет использоваться по умолчанию, если аргумент не был получен
    console.log(this.name, ', hi!')

    console.log('and you', secondName)
    console.log(' ')
}

let person = {
    name: 'John',
    greet: greet
}

let SecondPerson = {
    name: 'Bob',
    greet: greet
}


person.greet()
SecondPerson.greet()
console.log(' ')


//если функция будет объявлена через let greet = function, то парсер не прочитает её сразу перед запуском кода и не запихнет в лексическое окружение. Тогда необходимо, чтобы функция была объявлена перед обращением к ней. Если объявить через function greet(){}, тогда без разницы где объявлена функция



//CALL APPLY и BIND
person.greet()
person.greet.call(SecondPerson)                              //call принудительно заменит объект, на который ссылается THIS в вызываемой функции
person.greet.call(SecondPerson, 'Дядя Коляяя')               //далее через запятую можно передать аргументы

person.greet.apply(SecondPerson, ['Дядя Никитааа',])         //то же самое, но в apply аргументы передаются массивом


console.log(' ')

let thirdPerson = {
    name: 'Muzhik',
    greet: greet
}
let bound = greet.bind(thirdPerson, 'zhopa')
bound()

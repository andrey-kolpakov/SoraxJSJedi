//Объект window - глобальный и стоит на вершине иерархии всех объектов, доступных в браузере
//Все конструкторы являются частью объекта window
//Абсолютно всё, что делается в JS через браузер, можно делать через объект window
let newArray = new Array(1,2,3)
console.log(newArray)

let newArraySecond = new window.Array(1,2,3)
console.log(newArraySecond)

//Также и объект console - является свойством объекта window
window.console.log(newArray)



console.log(' ')



let globalaVariable = 'value' //Все переменные объявленные вне функций.
//Все глобальные переменные становятся свойствами объекта window

console.log(window)
console.log(' ')

console.log(globalaVariable)
console.log(window.globalaVariable)
//Когда мы ищем переменную globalaVariable, на самом деле интерпретатор ищет свойство с таким именем в объекте window

console.log(' ')

window.myVar = 123
console.log(myVar)



console.log(' ')



setTimeout(function(){
    console.log('2000 ms is passed')
}, 2000)        //Здесь первым аргументом является функция, вторым время через которое функция должна выполнится

console.log('Lol')  //Поскольку, setTimeout работает асинхронно, сначала в консоль выведется эта строка, только потом, по истечению 2000 милисекунд, выполнится код из setTimeout

let i = 0
let timer = setInterval(function(){     //функция setInterval возвращает число, которое является идентификатором счетчика. Для получения этого значения, можно присвоить функцию новой переменной. Здесь переменной timer
    console.log(++i)

    console.log('id счетчика', timer)  //возвращает 2 всегда
    console.log(' ')
}, 1000)    //То же самое, что и setTimeout, но здесь указываются интервалы, через которые, выполняется функция многократно

window.onclick = function(){
    clearInterval(timer)    //функция clearInterval остановит счетчик по клику по window
}
//clearTimeout - делает то же самое



console.log(' ')



//Диалоговые окна прерывают выполнение скрипта и выглядят по разному в разных операционных системах и браузера. Поэтому они подходят только для каких-нибудь экспериментов
alert('Hello')

let newPrompt = prompt('Введите значение') //создает поле для ввода
console.log(newPrompt)  

let answer = confirm('Are u confirm this?')
console.log(answer) //Вернёт true, если пользователь жмет ok, вернёт false, если пользователь жмет cancel


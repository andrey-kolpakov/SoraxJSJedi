//Strict mode - это такое подмножество JS, которое появилось в ECMAscript5, существует для устранения некоторых слабых мест в языке

// 'use strict'    //может быть прописана как в начале файла, так и в начале функции (в таком случае будет распространяться только на саму функцию)

let obj = {
    name: 'Dyadya'
}

// with (obj) {
//     console.log(name)
// }       //инструкция with - запрещена



function thisFun(){
    console.log(this)
}

thisFun()       //В обычном режиме this в функции, вызванной не из объекта, указывает на глобальный объект - Window. Здесь же указывает на undefined



let dyadya = 123;               //в strict моде все переменные должны быть объявлены с помощью ключевых слов let и тд
console.log(dyadya)         


let newObj = {}

Object.defineProperty(newObj, 'gender', {
    value: 'male',
    writable: false
})

console.log(newObj)

newObj.gender = 'female'        //в strict mode при присвоении нового значения свойству с флагом writable:false вызовется ошибка type error. В обычном моде просто ничего не произойдёт. То же самое произойдёт при попытке удалить свойство при configurable: false

console.log(newObj)

//Нельзя создать несколько свойств объекта с одинаковым именем в strict mode. В обычном режиме можно, просто примется последнее значение.

//в Strict mode запрещены восьмеричные числа.
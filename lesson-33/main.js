// window.location.href = 'https://google.com/' //Редирект на страницу google.com
// location = 'https://google.com/'             //То же самое, что и выше

console.log(window.location)

//Объект location - свойство объекта window. В нём хранятся свойства, позволяющие взаимодействовать данные из адресной строки окна



location.hash = 'anything'
console.log(location.hash)
//hash - это один из способов сохранения состояния в одностраничных JS приложениях
//Свойство hash хранит в себе данные записанные после # в адресной строке - например
window.onhashchange = function(){
    console.log(location.hash.slice(1)) //отрежет часть возвращаемого массива (в данном случае 1 элемент массива - это #)
    console.log(location.hash)
}
//Чтобы следить за изменением hash если специальное событие 

console.log(location.toString())
//Возвращает значение location.href

//location.search - это то, что идёт после вопросительного знака в адресе - то есть то, что отправляется get-запросом на сервер

// location.reload() //метод, перезагружающий страницу. Если запустить такой скрипт, страница будет перезагружаться бесконечно

// location.assign('https://google.com/')   //то же самое, что и переназначение location.href - редирект

// location.replace('https://google.com/')  //то же самое, что и assign, но в этот раз браузер уберёт из истории предыдущую страницу и мы не сможем вернуться к ней по кнопке "назад"



console.log(encodeURI('https://google.com/page?name=Какое-то-имя'))
//Вернёт адрес где будут кракозябры вместо русских букв (как ниже)

console.log(decodeURI('https://google.com/page?name=%D0%9A%D0%B0%D0%BA%D0%BE%D0%B5-%D1%82%D0%BE-%D0%B8%D0%BC%D1%8F'))
//То же самое, что выше, но НАОБОРОТ




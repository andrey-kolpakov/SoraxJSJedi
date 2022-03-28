//ПРЕОБРАЗОВАНИЕ ТИПОВ
//В JS есть автоматическое преобразование типов. Если интерпретатор ожидает в каком-то месте программы увидеть значение определенного типа, то любое значение будет приведено к этому типу

console.log(5 +'5')             //Возвращает 55. Если один из операндов - строка, плюс всё приводится к строке и они конкатенируется
console.log(typeof (5 +'5'))    //возвращает string

console.log(5 * '5')             //Возвращает 25. Если один из операндов - строка, умножение все приводит к числам и умножает операнды
console.log(typeof (5 * '5'))    //возвращает number
console.log(5 * 'text')          //возвращает NaN, если преобразовать в числа нельзя
console.log(' ')

//boolean
console.log('5' == 5)               //true               
console.log('0' == false)           //true             
console.log(0 == false)             //true
console.log('5' == true)            //false
console.log(null == false)          //false
console.log(null == true)           //false
console.log(undefined == false)     //false
console.log(undefined == true)      //false
console.log(undefined == null)      //true
console.log(' ')
//Труднопредсказуемое поведение из-за оператора с приведением типов ==        



//ЯВНЫЕ ПРЕОБРАЗОВАНИЯ
//Автоматические преобразования - это не единственный способ преобразования типов. Также есть ЯВНЫЕ ПРЕОБРАЗОВАНИЯ (Explicit Conversions)
console.log(Number('555'))
console.log(typeof(Number('555')))

console.log(String(555))
console.log(typeof(String(555)))

console.log(Boolean(1))
console.log(typeof(Boolean(1)))


//Преобразование числа в логический тип. Первый ! - это уже преобразование к инвертированному логическому типу, а второй инвертирует инвертируемое значение
console.log(!!5)        //возвращает true
console.log(!!0)        //возвращает false


//Другие преобразования
console.log(typeof(345+''))     //Возвращает String. Прибавление пустой строки преобразует в строку 
console.log(typeof(+'345'))     //Возвращает Number. Унарный оператор + преобразовывает строку в число, если это возможно 
console.log((+' asd345 s'))     //Возвращает NaN, если перед или после чисел есть символы. Если стоят пробелы, вернёт Number, как в примере выше

console.log(' ')



//МЕТОДЫ
let number = 22
console.log(number.toString(10))         //Аргументом может принять систему счисления
console.log(typeof number.toString())

console.log(false.toString())
console.log(typeof false.toString())
console.log(' ')



//ГЛОБАЛЬНЫЕ ФУНКЦИИ
console.log(parseInt('45 px', 10))             //Второй параметр - система счисления
console.log(typeof parseInt('45 px'))

console.log(parseFloat('45.1 px', 10))             //Второй параметр - система счисления, отличается от предыдущей функции тем, что принимает и вещественные числа
console.log(typeof parseFloat('45.1 px'))
console.log(' ')



//Другие преобразования
console.log(String(Infinity))
console.log(typeof String(Infinity))

console.log(String(NaN))
console.log(typeof String(NaN))

console.log(+'')



console.log('  ')
//Только следующие нижже значения дают ЛОЖЬ при преобразовании в булевые. Все остальные дадут истину.
console.log(!!'')
console.log(!!NaN)
console.log(!!0)
console.log(!!null)
console.log(!!undefined)


//Преобразование в объект (объект обертка) 
let n = 5;
console.log(n.value)    //Возвращает undefined потому что такого свойства у объекта n (Обёртки) нет

n = null;
console.log(n.value)    //Возвращает ошибку TypeError
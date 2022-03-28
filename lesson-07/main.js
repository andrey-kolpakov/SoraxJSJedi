console.log(true)
console.log(false)

console.log(5 === 5)
console.log(5 === 6)

console.log(Boolean(5))
console.log(' ')

//Falsy values. При этих значениях, принимается значение false
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(0))
console.log(Boolean(NaN))
console.log(Boolean(''))

console.log(' ')

var t = "text"
if (t){     //если t возвращает true, код выполняется. Поскольку t - не пустая, код выполняется
    console.log('It`s true')
}

var b = ""
if (b){     //если b возвращает true, код выполняется. Поскольку b - пустая, код не выполняется
    console.log('It`s true')
}

//Везде, где интерпретатор ОЖИДАЕТ получить логические значения (как в условии if), значения будут преобразовываться в логические

console.log(' ')


//ЛОГИЧЕСКИЕ ОПЕРАТОРЫ

//логическое И записывается при помощи двух амперсандов &&. Возвращает истину, только если оба операнда истинны
console.log(true && false)  //возвращает false
console.log(true && true)   //возвращает true
console.log(' ')

//логическое ИЛИ возвращает true, если хотя бы один операнд истиннен
console.log(true || false)    //возвращает false
console.log(false || false)   //возвращает true
console.log(' ')

//унарный оператор логического отрицания
console.log(!true)          //если операнд истиннен, возвращает ложь 
console.log(!false)         //если операнд ложный, возвращает истину 
console.log(' ')

let a = 0, isTrue = true;
isTrue && (a = 5);
//Если левая часть выражения истина, то выполняется правая часть
console.log(a)

console.log(' ')

let someString = 'Non-empty string';
let newString = someString || 'New string';
console.log(newString)
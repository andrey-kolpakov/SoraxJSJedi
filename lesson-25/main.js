let array = [1, 2, 3, 4, 5, 6, 21, 3]

array.forEach(function (element) {           //Принимает три аргумента: сам элемент, индекс элемента и массив
    console.log(typeof element)
})

console.log(array.map(function (e) {
    return e + e
}))                                         //Метод map возвращает массив, каждый элемент которого формируется из значений, которые возвращаются из функции, которую мы передаём в качестве аргумента 

//Метод filter позволяет отсеить элементы из массива по какому-либо критерию. Он принимает функцию, которая должна вернуть истинное или ложное значение, для каждого элемента массива. Если true - добавляется в нвоый массив, если false, то элемент не добавляется
let filtered = array.filter(function (e) {
    return e % 2 === 0
})      //В этом случае создан массив, элементы которого - это четные элементы массива array

console.log(filtered)

console.log(array.every(function (e) {
    return typeof e == 'number'
})) // вернёт true, если все элементы отвечают условию

console.log(array.some(function (e) {
    return typeof e > 6
})) // вернёт true, если хотя бы один элемент отвечает условию


let reduced = array.reduce(function (a, b, index, array) {
    return a + b
}) //Выполняет функцию для каждого элемента массива и хранит в себе промежуточное значение, которое сформировалось в результате выполнения предедущей итерации

//a - это промежуточное значение, b - текущее

console.log(reduced)

console.log(array.reduceRight(function (a, b, index, array) { return a + b })) //то же самое, только не слева направо, а справа налево






console.log(array.indexOf(21))       //индекс первого элемента, содержащего в себе 3
console.log(array.indexOf(3))       //индекс первого элемента, содержащего в себе 3

console.log(array.lastIndexOf(3))       //индекс последнего элемента, содержащего в себе 3

console.log(array.lastIndexOf(72))       //если этого элемента нет в массиве, возвращается -1
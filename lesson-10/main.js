if (true) console.log('It`s true')

if (true) {
    console.log('  ')
    console.log('It`s actually true')
    console.log('  ')
}

if(false){
    console.log('  ')
    console.log('Not a good choice')
    console.log('  ')
} else {
    console.log('  ')
    console.log('It`s good choice')
    console.log('  ')
}


let number = 10

if(number<5){
    console.log('  ')
    console.log('It`s good choice')
    console.log('  ')
} else if(number<8){
    console.log('  ')
    console.log('Not enough good choice')
    console.log('  ')
}  else if(number<11){
    console.log('  ')
    console.log('It`s good choice yeah')
    console.log('  ')
}

let nameOfUser = 'Andrey'

if(nameOfUser === 'Alexey'){
    console.log('  ')
    console.log('Not a right name')
    console.log('  ')
} else if(nameOfUser === 'Dmitry'){
    console.log('  ')
    console.log('Not a right name again')
    console.log('  ')
}  else if(nameOfUser === 'Andrey'){
    console.log('  ')
    console.log('It`s a right name ' + nameOfUser)
    console.log('  ')
}


//Более удобный вариант для схемы выше

switch(nameOfUser){
    case 'Alexey': {console.log('NO')};break;
    case 'Dmitry': {console.log('NO')};break;
    case 'Andrey': {console.log('Yes!')};break;
    case 'Alexandr': {console.log('NO')};break;
}

//Передаём в первые скобки переменную, по которой идёт ветвление и варианты путей согласно содержимому после case
//screen

console.log(screen.width, screen.height)                //разрешение экрана пользователя
console.log(screen.availWidth, screen.availHeight)     //максимально доступная высота и ширина, в которых можно открыть браузер в неполноэкранном режиме

console.log(screen.colorDepth)          //Максимальная глубина цвета



//navigator - содержит в себе информацию о браузере. Может быть полезно например при сборе статистики 
console.log(navigator)



//history

console.log(history)
console.log(history.length)     //Количество элементов в истории браузера

//history.back()        //перейти на предыдущую страницу
//history.forward()     //перейти на следующую страницу

//Получить ссылки из истории нельзя, потому что тогда кто угодно имел бы доступ к истории моего браузера. Можно только перенаправлять на какие-то страницы из истории



//code for page

let navEL
let contentEl = document.querySelector('.content')
let nav = document.querySelector('.nav')

let links = {
    main: 'Text for main',
    about: 'Text for about',
    downloads: 'Text for downloads'
}

let updatestate = function (state) {
    if (state.type === 'load' || state == null) {
        contentEl.innerHTML = 'New page'

        return
    }
    contentEl.innerHTML = links[state.page]

    return
}

window.addEventListener('popstate', function(e){
    updatestate(e.state)
})


nav.addEventListener('click', function (e) {
    let state
    if (e.target.tagName !== 'A') return

    state = {
        page: e.target.getAttribute('href')
    }

    history.pushState(state, '', state.page)
    updatestate(state)
    e.preventDefault();
})

window.addEventListener('load', updatestate)
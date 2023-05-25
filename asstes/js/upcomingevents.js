let up_coming = data.events.filter(elemento => Date.parse(elemento.date) > Date.parse(data.currentDate))
console.log(up_coming)

const card_up = document.getElementById('card_up')

showCard(up_coming, card_up)

function showCard(listCards, container) {
    container.innerHTML = ''

    if (listCards.length > 0) {

        let fragment = document.createDocumentFragment()
        for (let element of listCards) {
            let div = document.createElement('div')
            div.classList.add("card")
            div.style.width = "18rem"
            div.innerHTML = `<img src=${element.image} class="card-img-top " alt="...">
         <div class="card-body text_center">
             <h5 class="card-title title_card">${element.name}</h5>
            <p class="card-text">${element.description}</p>
            <p>Price: ${element.price} U$D</p>
             <a href="./details.html?id=${element._id}" class="navega1">View More</a>
         </div>`
            fragment.appendChild(div)
        }
        container.appendChild(fragment)
    } else {
        let div = document.createElement('div')
        div.innerHTML = `<p class="card-text">Not Found Category</p>`
        container.appendChild(div)
    }
}

const category_nav = document.getElementById('category_nav')

category_nav.appendChild(checkbox(up_coming))

function checkbox(array) {

    let arrayCate = []

    for (let elemento of array) {

        let categorias = elemento.category
        arrayCate.push(categorias)
    }

    let result = arrayCate.filter((item, index) => {
        return arrayCate.indexOf(item) === index;
    })

    let fragmentCheck = document.createDocumentFragment()

    for (let cate of result) {
        let li = document.createElement('li')
        li.innerHTML = `<label><input type="checkbox" name="categorias" id=${cate.split(" ").join("_")}> ${cate}
        </label>`
        fragmentCheck.appendChild(li)
    }
    return fragmentCheck
}

let inputsChequeados = []

let checkboxes = document.querySelectorAll('input[type=checkbox]')
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', verificarSeleccion)
})

function verificarSeleccion() {
    inputsChequeados = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.id)
    console.log(inputsChequeados)
    filterCruzade(up_coming)
}
function filterArray(arrayString, listCards) {
    if (arrayString.length == 0) return listCards
    return listCards.filter(elemento => arrayString.includes(elemento.category.replace(" ", "_")))
}

// SREEEEEAAAAAACHHHHHHHH................................................

let stringSearch = ""

const search_input = document.getElementById("search_input")
console.log(search_input)

search_input.addEventListener('keyup', () => {
    stringSearch = search_input.value
    filterCruzade(up_coming)
})

function filterString(string, listCards) {
    if (string == "") return listCards
    return listCards.filter(elemento => elemento.name.toLowerCase().includes(string.toLowerCase().trim()))
}

function filterCruzade(listCards) {
    let arrayFilterCheck = filterArray(inputsChequeados, listCards)
    let arrayFilterString = filterString(stringSearch, arrayFilterCheck)

    showCard(arrayFilterString, card_up)
}



// OTRA FORMA DE HACERLO SIN DINAMISMO

// const card_up = document.getElementById('card_up')

// let fragment = document.createDocumentFragment()

// const actual_date = Date.parse(data.currentDate)
// console.log(actual_date)

// for (let element of data.events) {

//     let up_coming = Date.parse(element.date)

//     if (up_coming > actual_date) {

//         let div = document.createElement('div')
//         div.classList.add("card")
//         div.style.width = "18rem"
//         div.innerHTML = `<img src=${element.image} class="card-img-top " alt="...">
//                  <div class="card-body text_center">
//                      <h5 class="card-title title_card">${element.name}</h5>
//                     <p class="card-text">${element.description}</p>
//                     <p>Price: ${element.price} U$D</p>
//                     <a href="./details.html?id=${element._id}" class="navega1">View More</a>
//                  </div>`
//         fragment.appendChild(div)
//     }
// }
// card_up.appendChild(fragment)
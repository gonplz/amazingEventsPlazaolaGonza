let urlApi = " https://mindhub-xj03.onrender.com/api/amazing"

fetch(urlApi)

    .then(response => response.json())
    .then(data => {
        console.log(data)
        
        //Traje los contenedores, las llamadas de las funciones y las variables gobales que pasaron a ser locales aca dentro

        const card_index = document.getElementById('card_index')
        showCard(data.events, card_index)

        const category_nav = document.getElementById('category_nav')
        category_nav.appendChild(checkbox(data.events))

        //Checkbox, variables, evento escucha y las llamadas
        let inputsChequeados = []
        let checkboxes = document.querySelectorAll('input[type=checkbox]')
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => { // trasnforme la funcion verificarChekeados en funcion flecha para utilizar las variables que eran globales, que haora osn locales dentro del fetch(then del json)
                inputsChequeados = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.id)
                console.log(inputsChequeados)
                filterCruzade(data.events,inputsChequeados, stringSearch)
            })
        })
        //Search, variables, evento escuha y las llamadas
        let stringSearch = ""
        const search_input = document.getElementById("search_input")
        search_input.addEventListener('keyup', () => {
            stringSearch = search_input.value
            filterCruzade(data.events, inputsChequeados, stringSearch)
        })
    })
    .catch(error => console.log(error))


    //Funciones..........................

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

//Checkboxes.................
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

function filterArray(arrayString, listCards) {
    if (arrayString.length == 0) return listCards
    return listCards.filter(elemento => arrayString.includes(elemento.category.replace(" ", "_")))
}

// Search................................................

function filterString(string, listCards) {
    if (string == "") return listCards
    return listCards.filter(elemento => elemento.name.toLowerCase().includes(string.toLowerCase().trim()))
}

function filterCruzade(listCards, inputsChequeados, stringSearch) {
    let arrayFilterCheck = filterArray(inputsChequeados, listCards)
    let arrayFilterString = filterString(stringSearch, arrayFilterCheck)

    showCard(arrayFilterString, card_index)
}
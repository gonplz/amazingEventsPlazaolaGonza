const card_index = document.getElementById('card_index')

let fragment = document.createDocumentFragment()

for (let element of data.events) {
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
card_index.appendChild(fragment)

console.log(card_index)

const category_nav = document.getElementById('category_nav')

category_nav.appendChild(checkbox(data.events))

function checkbox(array) {

    let arrayCate = []

    for (let elemento of array) {

        let categorias = elemento.category
        console.log(categorias)
        arrayCate.push(categorias)
    }

    let result = arrayCate.filter((item, index) => {
        return arrayCate.indexOf(item) === index;
    })

    // ....................................................

    let fragmentCheck = document.createDocumentFragment()

    for (let cate of result) {
        let li = document.createElement('li')
        li.innerHTML = `<label for=${cate}.split(" ").join("_")>${cate}</label>
    <input type="checkbox" name="categorias" id=${cate}.split(" ").join("_")>`
        fragmentCheck.appendChild(li)
    }
    return fragmentCheck
}

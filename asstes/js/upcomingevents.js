const card_up = document.getElementById('card_up')

let fragment = document.createDocumentFragment()

const actual_date = Date.parse(data.currentDate)
console.log(actual_date)

for (let element of data.events) {

    let up_coming = Date.parse(element.date)

    if (up_coming > actual_date) {

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
}
card_up.appendChild(fragment)
const card_index = document.getElementById('card_index')

let fragment = document.createDocumentFragment()

for(let element of data.events)
{
    let div = document.createElement('div')
    div.classList.add("card")
    div.style.width = "18rem"
    div.innerHTML = `<img src=${element.image} class="card-img-top " alt="...">
         <div class="card-body text_center">
             <h5 class="card-title title_card">${element.name}</h5>
            <p class="card-text">${element.description}</p>
            <p>Price: ${element.price} U$D</p>
             <a href="./details.html" class="navega1">View More</a>
         </div>`
    fragment.appendChild(div)
}
card_index.appendChild(fragment)


// new Date

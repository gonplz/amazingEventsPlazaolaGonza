let urlApi = " https://mindhub-xj03.onrender.com/api/amazing"

fetch(urlApi)

  .then(response => response.json())
  .then(data => {
    console.log(data)

    // Al igual que en Index, past_events y upcoming. Coloqué contenedor y las variables y el llamado a la funcion.

    const id = new URLSearchParams(location.search).get("id")
    const cartas = data.events.find(elemento => elemento._id == id)
    createCard(cartas)

  })
  .catch(error => console.log(error))
  

function createCard(card) {
  const card_details = document.getElementById("card_details")
  let div = document.createElement('div')
  div.classList.add("card", "mb-3", "d-flex", "justify-content-center")
  div.style.width = "50rem"
  div.innerHTML = `<div class="row g-0"> <div class="col-md-4 d-flex">
      <img src="${card.image}" class="img-fluid rounded-start object-fit-cover w-100" style="height: 26rem;" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <div class="d-flex flex-column">
          <h1 class="d-flex justify-content-center mb-5">${card.name}</h1>
            <ul>
              <li><strong>Date</strong>: ${card.date}</li>
              <li><strong>Description</strong>: ${card.description}</li>
              <li><strong>Category</strong>: ${card.category}</li>
              <li><strong>Place</strong>: ${card.place}</li>
              <li><strong>Capacity</strong>: ${card.capacity}</li>
              <li><strong>${card.assistance == undefined? "Estimate":"Assistance"}</strong>: ${card.assistance == undefined? card.estimate: card.assistance}</li>
              <li><strong>Price</strong>: ${card.price} U$D</li>
            </ul>
            <input type="button" value="Back" onClick="history.go(-1);">
          </div>

        </div>
      </div>
    </div>`
  card_details.appendChild(div)
}




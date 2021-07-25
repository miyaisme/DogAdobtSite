const BASE_URL = 'https://dog.ceo/api'
const BREED_LIST = 'https://dog.ceo/api/breeds/list/all'

let breed = []
const PICS = []

const dataPanel = document.querySelector('#data-panel')

function renderDogData(data) {
  let rawHTML = ''
  console.log(breed)
  data.forEach(item => {
    rawHTML += `
      <div class="card col m-2" style="width: 10rem;">
        <img src="${BASE_URL + '/breed/' + item + '/images/random'}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item}</h5>
          <a href="#" class="btn btn-danger">♥</a>
        </div>
      </div>
    `
  });

  console.log(rawHTML)
}

// renderDogData(breed)

function makePICS(data) {
  console.log(data)
  console.log(data.length)
}

function makeBreed(data){
  axios.get(BREED_LIST).then((response) => {
    data.push(...Object.keys(response.data.message))
  })
}

makeBreed(breed)

console.log(breed)
console.log(typeof(breed))
console.log(breed.length)
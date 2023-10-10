const URL = 'https://rickandmortyapi.com/api';
const containerChar = document.querySelector('.characters');
const pagination = document.querySelector('.pagination');

function createPag(){
  let buttons = ``;
  for(let i = 1; i<= 42; i++){
    buttons += `
    <li class="page-item">
      <a class="page-link" href="#" data-id="${ i }">${ i }</a>
    </li>`;
  }
  pagination.innerHTML = buttons;
}

createPag();

function getCharacters(page=1){
  fetch(`${ URL }/character/?page=${ page }`)
      .then(response => response.json())
      .then(data => {
          console.log(data.info);
          const characters = data.results;
          showCharaters(characters);
      });
}

getCharacters();

function createCard(character){
    const card = document.createElement('div');
    card.classList.add('card', 'mt-3', 'bg-secondary-subtle');
    card.style.width = '18rem';
    const htmlCard = `
    <img src="${ character.image }" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${ character.name }</h5>
      <p class="card-text">${ character.status }</p>
      <p class="card-text">${ character.origin.name }</p>
      <a href="#" class="btn btn-success" data-id="${ character.id }">Ver más</a>
    </div>`;
    card.innerHTML = htmlCard;
    return card;
}

function showCharaters(characters){
    containerChar.innerHTML = '';
    characters.forEach(character => {
        containerChar.appendChild(createCard(character));
    })
}

function getPag(e){
  e.preventDefault();
  if(e.target.classList.contains('page-link')){
    id = e.target.getAttribute('data-id');
    getCharacters(id);
  }
}
pagination.addEventListener('click', getPag);
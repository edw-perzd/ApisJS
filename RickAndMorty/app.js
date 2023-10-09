const URL = 'https://rickandmortyapi.com/api';
const containerChar = document.querySelector('.characters');

fetch(`${ URL }/character`)
    .then(response => response.json())
    .then(data => {
        console.log(data.info);
        const characters = data.results;
        showCharaters(characters);
    });

/*
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
*/ 

function createCard(character){
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem';
    const htmlCard = `
    <img src="${ character.image }" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${ character.name }</h5>
      <p class="card-text">${ character.status }</p>
      <p class="card-text">${ character.origin.name }</p>
      <a href="#" class="btn btn-primary" data.id="${ character.id }">Go somewhere</a>
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
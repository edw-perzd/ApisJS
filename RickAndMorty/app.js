import { createCard, createCardModal, createPag } from './ui.js';

const URL = 'https://rickandmortyapi.com/api';
const containerChar = document.querySelector('.characters');
const pagination = document.querySelector('.pagination');
const modalTitle = document.querySelector('.modal-title');
const modalBody = document.querySelector('.modal-body');
const fetchApi = (url) => fetch(url).then(response => response.json());

pagination.innerHTML = createPag();

function getCharacters(page=1){
  fetchApi(`${ URL }/character/?page=${ page }`)
      .then(data => {
          const characters = data.results;
          showCharaters(characters);
      });
}

function getCharactesById(id){
  fetchApi(`${ URL }/character/${ id }`)
      .then(data => {
          const character = data;
          //console.log(character);
          modalTitle.innerHTML = character.name;
          modalBody.innerHTML = '';
          modalBody.appendChild(createCardModal(character));
      });
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
    const page = e.target.getAttribute('data-id');
    getCharacters(page);
  }
}

function getbuttonCard(e){
  e.preventDefault();
  if(e.target.classList.contains('btn')){
    const id = e.target.getAttribute('data-id');
    getCharactesById(id);
  }
}


createPag();
getCharacters();

pagination.addEventListener('click', getPag);
containerChar.addEventListener('click', getbuttonCard);
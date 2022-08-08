
import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries ';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;
// const BASE_URL = 'https://restcountries.com/v3.1';

const countryList = document.querySelector('.country-list');
const inputSearch = document.querySelector('#search-box');
const countryInfo = document.querySelector('.country-info');

function showError(error) {
  console.log(error);
  Notify.failure('Oops, there is no country with that name');
  countryInfo.innerHTML = '';
  countryList.innerHTML = '';
}



input.addEventListener("input", debounce(handleInput, DEBOUNCE_DELAY));

const createLi = ([{name, capital, flag, population, languages}]) => {
    `<li>
    <img src="" alt="">
    <p>${name.common}</p>
    <p>${capital}</p>
    <p>${population}</p>
    <p>${languages}</p>
    </li>
`
}

const generateContent = (array) => array.reduce((acc, item) => acc + createLi(item) + "");

const createMarkUp = (array) => {
    const result = generateContent(array);
    countryList.insertAdjacentHTML("beforeend", result)
}


function handleInput() {
    const countryInput = input.value.trim();
    fetchCountries(countryInput) 

  
    

}


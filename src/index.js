import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './fetchCountries.js';

fetchCountries();

const DEBOUNCE_DELAY = 300;
const countryList = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info")  
const input = document.querySelector("#search-box");


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


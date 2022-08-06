import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';



const DEBOUNCE_DELAY = 300;
const countryList = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info")

// import { fetchCountries } from './fetchCountries.js';
// fetchCountries()

function fetchCountries(name) {
    const url = `https://restcountries.com/v3.1/all?fields=name,capital,population,flags,languages`;
   return fetch(url)
    .then((response) => response.json())
    .then((data) => createMarkUp(data))
    .catch((error) => console.log(error));
}

fetchCountries();
   
const input = document.querySelector("#search-box");
input.addEventListener("input", debounce(handleInput, DEBOUNCE_DELAY));

const createLi = (item) => {
    `<li>
    <img src="" alt="">
    <p>${item.name.common}</p>
    <p>${item.capital}</p>
    <p>${item.population}</p>
    <p>${item.languages}</p>
    </li>
`
}

const generateContent = (array) => array.reduce((acc, item) => acc + createLi(item) + "");

export const createMarkUp = (array) => {
    const result = generateContent(array);
    countryList.insertAdjacentHTML("beforeend", result)
}


function handleInput() {
    const countryInput = input.value.trim();
    // if (countryInput = "") {
    //     return
    // }

}


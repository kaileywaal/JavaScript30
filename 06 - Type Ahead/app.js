const endpoint =
"https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(endpoint)
.then((data) => data.json())
.then((data) => data.forEach((item) => cities.push(item)));

//add event listener for typing
const searchInput = document.querySelector('.search');
searchInput.addEventListener('keyup', addSuggestions);

//determine content that is typed
//if obj in cities variable contains what is typed in city or state
function searchContent(content) {
    //check if city or state contains input content (not case sensitive)
    return cities.filter(obj => obj.city.toLowerCase().includes(content.toLowerCase()) || obj.state.toLowerCase().includes(content.toLowerCase()));
}

//add it to suggestions list
function addSuggestions() {
    const inputValue = searchInput.value;
    const matches = searchContent(inputValue)
    const suggestionsList = document.querySelector('.suggestions');
    const regEx = new RegExp(inputValue, 'gi');
    //create suggestion item for each item to add
    let items = matches.map(item => {
        const city = item.city.replaceAll(regEx, `<span class='hl'>${inputValue}</span>`);
        const state = item.state.replaceAll(regEx, `<span class='hl'>${inputValue}</span>`);
        console.log(city);
        return `<li><span>${city}, ${state}</span><span class="population>${item.population}</span></li>`
    }).join("");
    suggestionsList.innerHTML = items;
} 
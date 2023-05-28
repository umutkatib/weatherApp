///////////////////////////////////////////////////////////////////////
const url = 'https://api.openweathermap.org/data/2.5/'
const key = 'c6f859adfde2ee3aaf835176c1585fe7'


const setQuery = (e) => {
    if (e.keyCode == '13')
        getResult(searchBar.value)
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}`
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult);
    console.log(query);
}

const displayResult = (result) => {
    let city = document.querySelector(".city");
    city.innerText = `${result.name}, ${result.sys.country}`;

    let temp = document.querySelector(".temp");
    temp.innerText = `${(result.main.temp - 273).toFixed(2)}  °C`;

    let desc = document.querySelector(".desc");
    desc.innerText = result.weather[0].description;

    let feels_like = document.querySelector(".feels_like");
    feels_like.innerText = `Felt:${(result.main.feels_like - 273).toFixed(2)} °C`

    let visibility = document.querySelector(".visibility");
    visibility.innerText = `Visibility:${result.visibility/1000} KM`;

    let minmax = document.querySelector(".minmax");
    minmax.innerText = `Min Temp:${Math.round(result.main.temp_min - 273)}
    Max Temp:${Math.round(result.main.temp_max - 273)}` ;


}

const searchBar = document.querySelector("#searchBar");
searchBar.addEventListener('keypress', setQuery);



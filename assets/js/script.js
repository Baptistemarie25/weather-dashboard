var searchButtonEl = document.getElementById("search-btn");
var searchInputEl = document.getElementById("search-city");
var searchHistoryEl = document.getElementById("search-history");
var searchHistoryArray = [];
var weatherContainerEl = document.getElementById("weather-container");

const convertToLatLong = async (city) => {
    try {
        const apiKey = "a53b263fd5fb250576a1fa55d6798ef5";
        const apiURLGeo = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;
        const response = await fetch(apiURLGeo);
        const data = await response.json();
        console.log(data);
        var geoArray = [data[0].lat, data[0].lon];
        return geoArray;
        } catch (error) {
        console.log(error);
    }
};
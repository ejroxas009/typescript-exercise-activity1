"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocalStorage = exports.setLocalStorage = exports.displayCities = void 0;
let cityName = document.getElementById("city_name");
let country = document.getElementById("country");
let population = document.getElementById("population");
let searchText = document.getElementById("searchText");
let submitBtn = document.getElementById("submitBtn");
let myList = document.getElementById("myList");
let searchBtn = document.getElementById("searchBtn");
let searchResult = document.getElementById("searchResult");
let cityInfoArray = [];
let searchResultArray = [];
const addCityInfo = (data) => {
    cityInfoArray.push(data);
};
const displayCities = (data) => {
    //  myList = document.getElementById("myList")
    if (myList) {
        while (myList.hasChildNodes() && myList.firstChild) {
            myList.removeChild(myList.firstChild);
        }
    }
    data.forEach((item) => {
        let cityLi = document.createElement("li");
        let countryLi = document.createElement("li");
        let populationLi = document.createElement("li");
        let br = document.createElement("br");
        cityLi.innerText = "City: " + item.city;
        countryLi.innerText = "Country: " + item.country;
        populationLi.innerText = "Population " + item.population;
        if (myList) {
            myList.appendChild(cityLi);
            myList.appendChild(countryLi);
            myList.appendChild(populationLi);
            myList.appendChild(br);
        }
    });
};
exports.displayCities = displayCities;
// export const displaySearchResult = ()=>{
// let searchResult = document.getElementById("searchResult")
//    if(searchResult){
//     while(searchResult.hasChildNodes() && searchResult.firstChild) {
//         searchResult.removeChild(searchResult.firstChild);
//     }
// }
// searchResultArray.forEach((item:CityInfo) =>{
//     let cityLi2 = (document.createElement("li") as HTMLLIElement)
//     let countryLi2 = document.createElement("li")
//     let populationLi2 = document.createElement("li")
//     let br2 = document.createElement("br")
//     cityLi2.innerText = "City: " + item.city
//     countryLi2.innerText = "Country: " + item.country
//     populationLi2.innerText = "Population " + item.population
//     if(searchResult){
//         searchResult.appendChild(cityLi2)
//         searchResult.appendChild(countryLi2)
//         searchResult.appendChild(populationLi2)
//         searchResult.appendChild(br2)
//     }
// })
// }
submitBtn === null || submitBtn === void 0 ? void 0 : submitBtn.addEventListener('click', () => {
    var newCity = {
        city: cityName.value,
        country: country.value,
        population: population.value
    };
    addCityInfo(newCity);
    console.log(cityInfoArray);
    cityName.value = "";
    country.value = "";
    population.value = "";
    //displayCities(cityInfoArray);
    console.log(cityInfoArray);
    (0, exports.setLocalStorage)(cityInfoArray, "cityInfo");
    (0, exports.displayCities)((0, exports.getLocalStorage)("cityInfo"));
    console.log((0, exports.getLocalStorage)("cityInfo"));
});
searchBtn === null || searchBtn === void 0 ? void 0 : searchBtn.addEventListener('click', () => {
    searchResultArray = cityInfoArray.filter((data) => {
        if ((data.city.toLocaleLowerCase()).includes(searchText.value)) {
            return data;
        }
        else if ((data.country.toLocaleLowerCase()).includes(searchText.value)) {
            return data;
        }
        else {
            const message = document.createElement("li");
            message.innerText = " Result not found";
            if (myList) {
                myList === null || myList === void 0 ? void 0 : myList.appendChild(message);
            }
        }
    });
    console.log(searchResultArray);
    //displaySearchResult();
    (0, exports.setLocalStorage)(searchResultArray, "cityInfo");
    (0, exports.displayCities)((0, exports.getLocalStorage)("cityInfo"));
    searchText.value = "";
});
const setLocalStorage = (data, tag) => {
    localStorage.setItem(tag, JSON.stringify(data));
};
exports.setLocalStorage = setLocalStorage;
const getLocalStorage = (tag) => {
    return JSON.parse(localStorage.getItem(tag));
};
exports.getLocalStorage = getLocalStorage;
if (localStorage.length !== 0) {
    (0, exports.displayCities)((0, exports.getLocalStorage)("cityInfo"));
}
console.log(localStorage);

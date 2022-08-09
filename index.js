"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayCities = void 0;
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
    (0, exports.displayCities)(cityInfoArray);
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
    (0, exports.displayCities)(searchResultArray);
    searchText.value = "";
});


let cityName = (document.getElementById("city_name") as HTMLInputElement);
let country = (document.getElementById("country") as HTMLInputElement);
let population = (document.getElementById("population") as HTMLInputElement);
let searchText = (document.getElementById("searchText") as HTMLInputElement);
let submitBtn = document.getElementById("submitBtn")
let myList = document.getElementById("myList")
let searchBtn = document.getElementById("searchBtn")
let searchResult = document.getElementById("searchResult")


interface CityInfo {
    city: string,
    country: string,
    population: string

}

let cityInfoArray:CityInfo[] = [];
let searchResultArray:CityInfo[] = [];

const addCityInfo = (data: CityInfo) =>{
        cityInfoArray.push(data)
    }

export const displayCities = (data:CityInfo[])=>{
//  myList = document.getElementById("myList")
   if(myList) {
    while(myList.hasChildNodes() && myList.firstChild) {
        myList.removeChild(myList.firstChild);
    }
}

data.forEach((item:CityInfo) =>{
    let cityLi = (document.createElement("li") as HTMLLIElement)
    let countryLi = document.createElement("li")
    let populationLi = document.createElement("li")
    let br = document.createElement("br")

    cityLi.innerText = "City: " + item.city
    countryLi.innerText = "Country: " + item.country
    populationLi.innerText = "Population " + item.population
    if(myList){
        myList.appendChild(cityLi)
        myList.appendChild(countryLi)
        myList.appendChild(populationLi)
        myList.appendChild(br)

    }


})
    
}

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



submitBtn?.addEventListener('click', () =>{
    var newCity: CityInfo = {
        city:  cityName.value,
        country: country.value,
        population: population.value
     }
     
     addCityInfo(newCity);
     console.log(cityInfoArray)

     cityName.value = ""
     country.value = ""
     population.value = ""

     //displayCities(cityInfoArray);
     console.log(cityInfoArray)
     
     setLocalStorage(cityInfoArray, "cityInfo");
     displayCities(getLocalStorage("cityInfo"));
     console.log(getLocalStorage("cityInfo"))

})

searchBtn?.addEventListener('click', ()=>{
     searchResultArray = cityInfoArray.filter((data:CityInfo)=>{
           
        if((data.city.toLocaleLowerCase()).includes(searchText.value)) {
            return data
           }else if((data.country.toLocaleLowerCase()).includes(searchText.value)){
            return data
           }else{
            const message = document.createElement("li")
            message.innerText = " Result not found"
            if(myList){
                myList?.appendChild(message)
            }
            

           }
           
    })
   
    console.log(searchResultArray)
    //displaySearchResult();
    setLocalStorage(searchResultArray, "cityInfo")
    displayCities(getLocalStorage("cityInfo"))
    searchText.value = ""


})

export const setLocalStorage = (data : CityInfo[], tag: string) =>{
    localStorage.setItem(tag, JSON.stringify(data))

}

export const getLocalStorage = (tag : string) =>{
         return  JSON.parse(localStorage.getItem(tag)!);

}


if(localStorage.length !==0){
    
   displayCities(getLocalStorage("cityInfo"));

}

console.log(localStorage)

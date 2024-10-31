// this js is to fetch data feom an API 

// alert("this is an alert")

// triggering the dom

// first get the button and from the button get the value of the input to get the results 

const searchButton = document.querySelector(".searchButton");

// url of main filltered ingredients  
// const BASE_API = "www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";


// because we are clicking the button triggring an event and calling a function
searchButton.addEventListener("click", getRecipe);

function getRecipe() {
    // getting the search input's value and removing white space with trim
    let searchInput = document.getElementById("searchInput").value.trim();
    console.log(searchInput);
    // using fetch instead of axios to fetch data
    // fetch("www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then(response => response.json()).then(data => {
    //     console.log(data);
    // })


}

getRecipe();
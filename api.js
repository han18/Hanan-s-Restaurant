// this js is to fetch data feom an API 

// alert("this is an alert")

// triggering the dom

// first get the button and from the button get the value of the input to get the results 


const searchButton = document.querySelector(".searchButton");

// url of main filltered ingredients  
const BASE_API = "https://www.themealdb.com/api/json/v1/1/search.php?s=";


// because we are clicking the button triggring an event and calling a function
searchButton.addEventListener("click", getRecipe);

function getRecipe() {
    // getting the search input's value and removing white space with trim
    let searchInput = document.getElementById("searchInput").value.trim();
    console.log(searchInput);
    // using fetch instead of axios to fetch data
    // checking if input is not empty
    if (searchInput) {
        fetch(`${BASE_API}${searchInput}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // getting the meals from data -- meal is a variable to hold the new search
                data.meals.forEach(meal => {
                    html += `
                    <div> 
                    <h1> ${meal.strMealThums} </h1>
                    </div>
                    <div>
                    <img src="${meal.strmealThumb}">
                    </div>
                    
                    `

                })
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    } else {
        console.log("Please enter a recipe search.");
    }


}

getRecipe();
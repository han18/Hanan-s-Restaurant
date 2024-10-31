// this js is to fetch data feom an API 

// alert("this is an alert")

// triggering the dom

// first get the button and from the button get the value of the input to get the results 


const searchButton = document.querySelector(".searchButton");
const mainContainer = document.querySelector("#main-container");

// URL of main filtered ingredients  
const BASE_API = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

// Adding an event listener to the button to trigger the function when clicked
searchButton.addEventListener("click", getRecipe);

function getRecipe() {
    // Getting the search input's value and removing white space with trim
    let searchInput = document.getElementById("searchInput").value.trim();
    console.log(searchInput);

    // Checking if input is not empty
    if (searchInput) {
        fetch(`${BASE_API}${searchInput}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                // Check if meals are found
                if (data.meals) {
                    let html = ""; // Initialize html as an empty string

                    // Loop through each meal and add HTML content
                    data.meals.forEach(meal => {
                        html += `
                        <div> 
                            <h2>${meal.strMeal}</h2>
                            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" style="width:200px;height:auto;">
                        </div>
                        `;
                    });

                    // Display the HTML content on the page
                    mainContainer.innerHTML = html;
                } else {
                    mainContainer.innerHTML = "<p>No meals found. Try another search.</p>";
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                mainContainer.innerHTML = "<p>Error fetching data. Please try again later.</p>";
            });
    } else {
        console.log("Please enter a recipe search.");
        mainContainer.innerHTML = "<p>Please enter a search term.</p>";
    }
}

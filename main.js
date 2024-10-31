// this is where all the functionality of the dom will go
// testing the branching process understand the merging and branching precess
// using LocalStorage Local Storage is designed to hold data indefinitely

// const header3 = document.querySelector(".header-3");
// header3.innerHTML = "<h3>I changed the header's text </h3>";

//========================================//

// this code is from online example

const toggleButton = document.getElementById('toggle-button');
const body = document.body;

// Check for saved 'darkMode' in localStorage
const darkMode = localStorage.getItem('darkMode');

if (darkMode) {
    body.classList.add('dark-mode');
}

toggleButton.onclick = function() {
    body.classList.toggle('dark-mode');

    // Save the current preference to localStorage
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
}




// this is just testing the menu to see if I could manipulate it 

// const menuTest = document.querySelector(".menu-test");

// menuTest.innerHTML = "<h4> I changed the  text</h4>";
// process.js

// Function to handle form submission
function processForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve form input values
    var degree = document.getElementById('degree').value.toLowerCase();
    var branch = document.getElementById('branch').value.toLowerCase();
    var year = document.getElementById('year').value;
    var subject = document.getElementById('subject').value.toLowerCase();

    // Check if conditions are satisfied
    if (degree === "bsc" && branch === "computer science" && year === "1" && subject === "mathematics") {
        // Redirect to os-1.html
        window.location.href = "Math.html";
    }
    else if (degree === "bsc" && branch === "computer science" && year === "1" && subject === "statistics") {
        // Redirect to os-1.html
        window.location.href = "statistic.html";
    }
    else if (degree === "bsc" && branch === "computer science" && year === "1" && subject === "electronics") {
        // Redirect to os-1.html
        window.location.href = "electronics.html";
    }
    else if (degree === "bsc" && branch === "computer science" && year === "2" && subject === "mathematics") {
        // Redirect to os-1.html
        window.location.href = "Math.html";
    }
    else if (degree === "bsc" && branch === "computer science" && year === "3" && subject === "operating systems") {
        // Redirect to os-1.html
        window.location.href = "os-1.html";
    }
    else if (degree === "bsc" && branch === "mathematics" && year === "1" && subject === "calculus") {
        // Redirect to os-1.html
        window.location.href = "calculus.html";
    } 
    else if (degree === "bsc" && branch === "mathematics" && year === "1" && subject === "statistics") {
        // Redirect to os-1.html
        window.location.href = "statistic.html";
    }    else if (degree === "bsc" && branch === "mathematics" && year === "1" && subject === "linear algebra") {
        // Redirect to os-1.html
        window.location.href = "Math.html";
    }
     else {
        // Display error message
        alert("No Calculator Found, Please Provide Correct Choice.");
    }
}

// Add event listener to form submission
document.getElementById('educationalCalculatorForm').addEventListener('submit', processForm);

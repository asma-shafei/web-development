
const calculateBtn = document.querySelector("#calculate-btn");
const resultDiv = document.querySelector("#result");
const passingScoresDiv = document.querySelector("#passing-scores");

// Display all passing scores using a for loop

let passingScores = "";

for (let score = 60; score <= 100; score++) {
    passingScores += `<span>${score}</span>`;
}

passingScoresDiv.innerHTML = passingScores;


// Calculate the grade when the button is clicked

calculateBtn.addEventListener("click", function() {

    const userInput = prompt("Enter your score:");

    if (userInput === null || userInput.trim() === "") {
        resultDiv.innerHTML = "Please enter a valid score.";
        return;
    }

    const score = Number(userInput);

    if (Number.isNaN(score)) {
        resultDiv.innerHTML = "Invalid input. Please enter a number.";
        return;
    }

    if (score < 0 || score > 100) {
        resultDiv.innerHTML = "Score must be between 0 and 100.";
        return;
    }

    if (score >= 90 && score <= 100) {
        resultDiv.innerHTML = "Excellent";
    }
    else if (score >= 80 && score < 90) {
        resultDiv.innerHTML = "Very Good";
    }
    else if (score >= 60 && score < 80) {
        resultDiv.innerHTML = "Good";
    }
    else {
        resultDiv.innerHTML = "Failed";
    }

});

// Step 1: Create the checkAnswer function
function checkAnswer() {
    // Step 2: Retrieve the correct answer
    const correctAnswer = "4";

    // Step 3: Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Handle case where no option is selected
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer before submitting.";
        return;
    }

    const userAnswer = selectedOption.value;

    // Step 4 & 5: Compare answers and provide feedback
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Step 6 & 7: Retrieve the submit button and add event listener
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);

// divide function for the calulator
function divide() {
    const firstNumber = document.getElementById("firstNumber").value;
    const secondNumber = document.getElementById("secondNumber").value;
  
    // Check for empty inputs
    if (firstNumber === "" || secondNumber === "") {
      document.getElementById("result").innerHTML = "Error: Please enter values in both fields.";
      return;
    }
    
    // Check for non-numeric values
    if (isNaN(parseFloat(firstNumber)) || isNaN(parseFloat(secondNumber))) {
      document.getElementById("result").innerHTML = "Error: Please enter only numbers.";
      return;
    }
    
    // Check for zero division
    if (secondNumber === "0") {
        document.getElementById("result").innerHTML = "";
        alert("You can't divide by 0.");
        return;
    }
    
    const result = (firstNumber / secondNumber).toFixed(2);
    const resultElement = document.getElementById("result");
    resultElement.textContent = result;

    if (resultElement) { // Check if element exists
        resultElement.classList.remove("red", "orange", "green"); // Remove all color classes
        if (result <= 10) {
            resultElement.classList.add("red");
        } else if (result < 15) {
            resultElement.classList.add("orange");
        } else {
            resultElement.classList.add("green");
        }
    }

    document.getElementById("result").innerHTML = "Your car can drive: " + result + " kilometers per liter!";
}
// Function to handle the calculation based on distances between cities
function calculate() {
    var choice1 = document.getElementById("choice1").value;
    var choice2 = document.getElementById("choice2").value;
    var answer;
    var resultElement = document.getElementById("result1"); // Declared resultElement here

    if (choice1 === "Tel Aviv") {
        choice1 = 0;
    } else if (choice1 === "Haifa") {
        choice1 = 100;
    } else if (choice1 === "Beer Sheva") {
        choice1 = -110;
    } else if (choice1 === "Eilat") {
        choice1 = -340;
    }

    if (choice2 === "Tel Aviv") {
        choice2 = 0;
    } else if (choice2 === "Haifa") {
        choice2 = 100;
    } else if (choice2 === "Beer Sheva") {
        choice2 = -110;
    } else if (choice2 === "Eilat") {
        choice2 = -340;
    }
    
    if (choice1 === choice2) {
        resultElement.classList.add("red");
        answer = "You are drunk! get out of the car :)";
    } else if (choice1 > choice2) {
        resultElement.classList.remove("red"); 
        answer = choice1 - choice2 + " KM";
    } else {
        resultElement.classList.remove("red"); 
        answer = choice2 - choice1 + " KM";
    }

    // Display the answer in the result paragraph
    resultElement.textContent = answer; // Used resultElement here
}

// Function to toggle between calculators based on selected option
function toggleCalculator() {
    var selectElement = document.getElementById("calculatorSelect");
    var distanceCalculator = document.getElementById("distanceCalculator");
    var gasolineCalculator = document.getElementById("gasolineCalculator");

    if (selectElement.value === "distance") {
        distanceCalculator.style.display = "block";
        gasolineCalculator.style.display = "none";
    } else if (selectElement.value === "gasoline") {
        distanceCalculator.style.display = "none";
        gasolineCalculator.style.display = "block";
    } else {
        distanceCalculator.style.display = "none";
        gasolineCalculator.style.display = "none";
    }
}


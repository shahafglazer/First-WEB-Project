document.getElementById("subscribeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Validate email format
    var emailInput = document.getElementById("emailInput").value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Simulate a successful subscription for demonstration purposes
    // You may replace this with your actual subscription logic
    alert("You subscribed successfully!");
});
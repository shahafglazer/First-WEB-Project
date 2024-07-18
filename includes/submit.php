<?php

$servername = "localhost";
$username = "shahafgl";
$password = "drEP?ekl3lY";
$dbname = "shahafgl_FinalProject";


// Create a connection to the MySQL database.
$conn = new mysqli($servername,$username,$password,$dbname);

// Check the connection.
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$name = $_POST['name'];
$email = $_POST['email'];
$location = $_POST['location'];
$licensePlate = $_POST['licensePlate'];
$description = $_POST['description'];

// Insert data into database
$sql = "INSERT INTO reports (name, email, location, licensePlate, description) VALUES ('$name', '$email', '$location', '$licensePlate', '$description')";

if ($conn->query($sql) === TRUE) {
    echo "Accident reported successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the connection to the MySQL database.
$conn->close();
?>

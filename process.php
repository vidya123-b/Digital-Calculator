<?php
// process.php

// Check if the form is submitted using POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate input data
    $degree = strtolower($_POST['degree']);
    $branch = strtolower($_POST['branch']);
    $year = $_POST['year'];
    $subject = strtolower($_POST['subject']); // Convert to lowercase

    // Check conditions and redirect accordingly
    if ($degree === "bsc" && $branch === "computer science" && $year === "1" && $subject === "mathematics") {
        // Redirect to Math.html for first-year mathematics
        header("Location: Math.html");
        exit(); // Ensure that no more code is executed after the header
    } elseif ($degree === "bsc" && $branch === "computer science" && $year === "3" && $subject === "mathematics") {
        // Redirect to os-1.html for second-year mathematics
        header("Location: Math.html");
        exit(); // Ensure that no more code is executed after the header
    } elseif ($degree === "bsc" && $branch === "computer science" && $year === "3" && $subject === "operating systems") {
        // Redirect to os-1.html for third-year operating systems
        header("Location: os-1.html");
        exit(); // Ensure that no more code is executed after the header
    } else {
        // Display error message
        echo "<script>alert('No Calculator Found, Please Provide Correct Choice.'); window.location.href='Educational.html';</script>";
        exit();
    }
} else {
    // If the form is not submitted using POST method, redirect to an error page or handle accordingly
    header("Location: error.html");
    exit();
}
?>

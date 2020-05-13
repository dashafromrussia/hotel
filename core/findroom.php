<?php
require_once 'config.php';

$name = trim($_POST['name']);
$email = trim($_POST['email']);
$room = trim($_POST['room']);
$view = trim($_POST['view']);
$days = trim($_POST['days']);


if ($name ==''  OR $email=='' OR $room =='' OR $view ==''OR $days==''){
    echo 2;
    die;
}

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO room (name, email, room, view, days) VALUES ('".$name."', '".$email."','".$room."','".$view."','".$days."')";

if ($conn->query($sql) === TRUE) {
    echo 1;
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
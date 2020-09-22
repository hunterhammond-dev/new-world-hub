<?php
// used to connect to the database
$host = "162.241.216.248";
$db_name = "kaanprod_newworldhub";
$username = "kaanprod_admin";
$password = "J86x84r9!@#";


try {
$con = new PDO("mysql:host={$host};dbname={$db_name}", $username, $password);
}

// show error
catch(PDOException $exception){
echo "Connection error: " . $exception->getMessage();
}
?>

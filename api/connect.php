<?php

$host = "162.241.216.248";
$db_name = "kaanprod_newworldhub";
$username = "kaanprod_admin";
$password = "J86x84r9!@#";

$mysqli = new mysqli($host, $username, $password,$db_name);

if ($mysqli->connect_error) {
    die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
}
?>

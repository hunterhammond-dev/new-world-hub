<?php

include 'connect.php';

$query = "SELECT uname, first_name, last_name, email FROM users
ORDER BY id DESC";
$stmt = $con->prepare($query);
$stmt->execute();
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($results);
echo $json;
?>

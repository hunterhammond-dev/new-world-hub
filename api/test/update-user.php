<?php

if($_POST){
include 'connect.php';
try{

$query = "UPDATE users SET uname=:uname, first_name=:first_name, last_name=:last_name, email=:email
WHERE id = :id";

$stmt = $con->prepare($query);

$id = $_POST['id'];
$username = $_POST['uname'];
$name = $_POST['first_name'];
$description = $_POST['last_name'];
$price = $_POST['price'];

$stmt->bindParam(':uname', $uname);
$stmt->bindParam(':first_name', $first_name);
$stmt->bindParam(':last_name', $last_name);
$stmt->bindParam(':email', $email);
$stmt->bindParam(':id', $id);

if($stmt->execute()){
echo json_encode(array('result'=>'success'));
}else{
echo json_encode(array('result'=>'fail'));
}

}

catch(PDOException $exception){
die('ERROR: ' . $exception->getMessage());
}
}
?>

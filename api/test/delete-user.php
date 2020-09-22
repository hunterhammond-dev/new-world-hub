<?php

include 'connect.php';

try {

$id=isset($_GET['id']) ? $_GET['id'] : die('ERROR: ID not found.');

$query = "DELETE FROM users WHERE id = ?";
$stmt = $con->prepare($query);
$stmt->bindParam(1, $id);

if($stmt->execute()){

echo json_encode(array('result'=>'success'));
}else{
echo json_encode(array('result'=>'fail'));
}
}

// show error
catch(PDOException $exception){
die('ERROR: ' . $exception->getMessage());
}
?>

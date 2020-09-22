<?php

$uname=isset($_GET['uname']) ? $_GET['uname'] : die('ERROR: uname not found.');

include 'connectPDO.php';

try {

    $query = "SELECT leaderId, uname, compId
                FROM application 
                WHERE uname = ?";

    $stmt = $con->prepare( $query );

    $stmt->bindParam(1, $uname);

    $stmt->execute();

    $row = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $json = json_encode($row);
    echo $json;
}

catch(PDOException $exception){
    die('ERROR: ' . $exception->getMessage());
}
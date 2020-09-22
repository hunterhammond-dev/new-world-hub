<?php

$companyId=isset($_GET['companyId']) ? $_GET['companyId'] : die('ERROR: companyId not found.');

include 'connectPDO.php';

try {

    $query = "SELECT username, companyAssignmentId
                FROM companyAssignment
                WHERE companyId = ?";

    $stmt = $con->prepare( $query );

    $stmt->bindParam(1, $companyId);

    $stmt->execute();

    $row = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $json = json_encode($row);
    echo $json;
}

catch(PDOException $exception){
    die('ERROR: ' . $exception->getMessage());
}
<?php

include 'connectPDO.php';

try {
    $query = "SELECT catId, catName, catDescription FROM categories";
    $stmt = $con->prepare( $query );

    $stmt->execute();

    $row = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $json = json_encode($row);
    echo $json;
}

catch(PDOException $exception){
    die('ERROR: ' . $exception->getMessage());
}

<?php

include 'connectPDO.php';

try {

    $query = "SELECT CompanyId, Leader, Faction, Server, Focus, Size, Language, Voice, CompanyName, user.name
                FROM companies 
                LEFT JOIN user ON Leader = user.uid 
                ORDER BY CompanyId ASC";

    $stmt = $con->prepare( $query );

    $stmt->execute();

    $row = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $json = json_encode($row);
    echo $json;
}

catch(PDOException $exception){
    die('ERROR: ' . $exception->getMessage());
}
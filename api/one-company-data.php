<?php

$CompanyId=isset($_GET['CompanyId']) ? $_GET['CompanyId'] : die('ERROR: CompanyId not found.');

include 'connectPDO.php';

try {

    $query = "SELECT CompanyId, Leader, Faction, Server, Focus, Size, Language, Voice, CompanyName, description, user.name
                FROM companies 
                LEFT JOIN user ON Leader = user.uid 
                WHERE CompanyId = ?";

    $stmt = $con->prepare( $query );

    $stmt->bindParam(1, $CompanyId);

    $stmt->execute();

    $row = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $json = json_encode($row);
    echo $json;
}

catch(PDOException $exception){
    die('ERROR: ' . $exception->getMessage());
}
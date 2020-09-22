<?php

if($_POST) {
    include 'connectPDO.php';

    try {
        $query = "INSERT INTO companies SET Leader=:Leader, Faction=:Faction, Server=:Server, Focus=:Focus, Size=:Size,
                    Language=:Language, Voice=:Voice, CompanyName=:CompanyName, description=:description";

        $stmt = $con->prepare($query);

        $stmt->bindParam(':Leader', $_POST['Leader']);
        $stmt->bindParam(':Faction', $_POST['Faction']);
        $stmt->bindParam(':Server', $_POST['Server']);
        $stmt->bindParam(':Focus', $_POST['Focus']);
        $stmt->bindParam(':Size', $_POST['Size']);
        $stmt->bindParam(':Language', $_POST['Language']);
        $stmt->bindParam(':Voice', $_POST['Voice']);
        $stmt->bindParam(':CompanyName', $_POST['CompanyName']);
        $stmt->bindParam(':description', $_POST['description']);

        if ($stmt->execute()) {
            echo json_encode(array('result' => 'success'));
        } else {
            echo json_encode(array('result' => 'fail'));
        }
    } catch (PDOException $exception) {
        die('ERROR: ' . $exception->getMessage());
    }
}
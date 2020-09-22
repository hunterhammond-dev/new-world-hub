<?php

$companyAssignmentId=isset($_GET['companyAssignmentId']) ? $_GET['companyAssignmentId'] : die('ERROR: companyAssignmentId not found.');

if($_SERVER['REQUEST_METHOD'] === 'DELETE') {

    include 'connectPDO.php';

    try {
        $query = "DELETE FROM companyAssignment WHERE companyAssignmentId = ?";

        $stmt = $con->prepare($query);

        $stmt->bindParam(1, $companyAssignmentId);

        $stmt->execute();

    } catch (PDOException $exception) {
        die('ERROR: ' . $exception->getMessage());
    }
}
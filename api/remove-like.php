<?php

$id=isset($_GET['id']) ? $_GET['id'] : die('ERROR: id not found.');

if($_SERVER['REQUEST_METHOD'] === 'DELETE') {

    include 'connectPDO.php';

    try {
        $query = "DELETE FROM likes WHERE id = ?";

        $stmt = $con->prepare($query);

        $stmt->bindParam(1, $id);

        $stmt->execute();

    } catch (PDOException $exception) {
        die('ERROR: ' . $exception->getMessage());
    }
}
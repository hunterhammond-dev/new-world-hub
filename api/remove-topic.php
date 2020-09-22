<?php

$topicId=isset($_GET['topicId']) ? $_GET['topicId'] : die('ERROR: topic id not found.');

if($_SERVER['REQUEST_METHOD'] === 'DELETE') {

    include 'connectPDO.php';

    try {
        $query = "DELETE FROM topics WHERE topicId = ?";

        $stmt = $con->prepare($query);

        $stmt->bindParam(1, $topicId);

        $stmt->execute();

    } catch (PDOException $exception) {
        die('ERROR: ' . $exception->getMessage());
    }
}
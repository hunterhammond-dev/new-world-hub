<?php

$postId=isset($_GET['postId']) ? $_GET['postId'] : die('ERROR: post id not found.');

if($_SERVER['REQUEST_METHOD'] === 'DELETE') {

    include 'connectPDO.php';

    try {
        $query = "DELETE FROM posts WHERE postId = ?";

        $stmt = $con->prepare($query);

        $stmt->bindParam(1, $postId);

        $stmt->execute();

    } catch (PDOException $exception) {
        die('ERROR: ' . $exception->getMessage());
    }
}
<?php

$post_id=isset($_GET['post_id']) ? $_GET['post_id'] : die('ERROR: post id not found.');

include 'connectPDO.php';

try {
    $query = "SELECT COUNT(post_id) FROM likes WHERE post_id = ?";
    $stmt = $con->prepare( $query );

    $stmt->bindParam(1, $post_id);

    $stmt->execute();

    $row = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $json = json_encode($row);
    echo $json;
}

catch(PDOException $exception){
    die('ERROR: ' . $exception->getMessage());
}
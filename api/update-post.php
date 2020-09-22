<?php

if($_POST) {
    include 'connectPDO.php';

    try {
        $query = "UPDATE posts SET postContent=:postContent
                  WHERE postId=:postId";

        $stmt = $con->prepare($query);

        $stmt->bindParam(':postContent', $_POST['postContent']);

        $stmt->bindParam(':postId', $_POST['postId']);

        if ($stmt->execute()) {
            echo json_encode(array('result' => 'success'));
        } else {
            echo json_encode(array('result' => 'fail'));
        }

    } catch (PDOException $exception) {
        die('ERROR: ' . $exception->getMessage());
    }
}

<?php
if($_POST) {
    include 'connectPDO.php';

    try {
        $query = "INSERT INTO posts SET postContent=:postContent, postTopic=:postTopic, postBy=:postBy";

        $stmt = $con->prepare($query);

        $stmt->bindParam(':postContent', $_POST['postContent']);
        $stmt->bindParam(':postTopic', $_POST['postTopic']);
        $stmt->bindParam(':postBy', $_POST['postBy']);

        if ($stmt->execute()) {
            echo json_encode(array('result' => 'success'));
        } else {
            echo json_encode(array('result' => 'fail'));
        }
    } catch (PDOException $exception) {
        die('ERROR: ' . $exception->getMessage());
    }
}

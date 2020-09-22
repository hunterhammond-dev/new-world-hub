<?php

if($_POST) {

    include 'connectPDO.php';

    try {
        $query = "INSERT IGNORE INTO likes SET userid=:userid, post_type=:post_type, post_id=:post_id, id=:id";

        $stmt = $con->prepare($query);

        $stmt->bindParam(':userid', $_POST['userid']);
        $stmt->bindParam(':post_type', $_POST['post_type']);
        $stmt->bindParam(':post_id', $_POST['post_id']);
        $stmt->bindParam(':id', $_POST['id']);

        if ($stmt->execute()) {
            echo json_encode(array('result' => 'success'));
        } else {
            echo json_encode(array('result' => 'fail'));
        }
    } catch (PDOException $exception) {
            die('ERROR: ' . $exception->getMessage());
    }
}
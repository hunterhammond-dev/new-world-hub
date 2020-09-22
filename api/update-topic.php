<?php

if($_POST) {
    include 'connectPDO.php';

    try {
        $query = "UPDATE topics SET topicSubject=:topicSubject, topicContent=:topicContent
                  WHERE topicId=:topicId";

        $stmt = $con->prepare($query);

        $stmt->bindParam(':topicSubject', $_POST['topicSubject']);
        $stmt->bindParam(':topicContent', $_POST['topicContent']);

        $stmt->bindParam(':topicId', $_POST['topicId']);

        if ($stmt->execute()) {
            echo json_encode(array('result' => 'success'));
        } else {
            echo json_encode(array('result' => 'fail'));
        }

    } catch (PDOException $exception) {
        die('ERROR: ' . $exception->getMessage());
    }
}

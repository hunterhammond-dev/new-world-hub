<?php

if($_POST) {
    include 'connectPDO.php';

    try {
        $query = "INSERT INTO topics SET topicSubject=:topicSubject, topicCat=:topicCat, topicContent=:topicContent, topicBy=:topicBy";

        $stmt = $con->prepare($query);

        $stmt->bindParam(':topicSubject', $_POST['topicSubject']);
        $stmt->bindParam(':topicCat', $_POST['topicCat']);
        $stmt->bindParam(':topicContent', $_POST['topicContent']);
        $stmt->bindParam(':topicBy', $_POST['topicBy']);

        if ($stmt->execute()) {
            echo json_encode(array('result' => 'success'));
        } else {
            echo json_encode(array('result' => 'fail'));
        }
    } catch (PDOException $exception) {
        die('ERROR: ' . $exception->getMessage());
    }
}

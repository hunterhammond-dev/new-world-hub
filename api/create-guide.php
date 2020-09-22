<?php

if($_POST) {
    include 'connectPDO.php';

    try {
        $query = "INSERT INTO guides SET guideSubject=:guideSubject, guideBy=:guideBy, guideContent=:guideContent, guideDesc=:guideDesc";

        $stmt = $con->prepare($query);

        $stmt->bindParam(':guideSubject', $_POST['guideSubject']);
        $stmt->bindParam(':guideBy', $_POST['guideBy']);
        $stmt->bindParam(':guideContent', $_POST['guideContent']);
        $stmt->bindParam(':guideDesc', $_POST['guideDesc']);

        if ($stmt->execute()) {
            echo json_encode(array('result' => 'success'));
        } else {
            echo json_encode(array('result' => 'fail'));
        }
    } catch (PDOException $exception) {
        die('ERROR: ' . $exception->getMessage());
    }
}
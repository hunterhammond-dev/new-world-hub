<?php

if($_POST) {

    include 'connectPDO.php';

    try {
        $query = "INSERT IGNORE INTO points SET userGaveBy=:userGaveBy, pointId=:pointId, userReceive=:userReceive";

        $stmt = $con->prepare($query);

        $stmt->bindParam(':userGaveBy', $_POST['userGaveBy']);
        $stmt->bindParam(':pointId', $_POST['pointId']);
        $stmt->bindParam(':userReceive', $_POST['userReceive']);

        if ($stmt->execute()) {
            echo json_encode(array('result' => 'success'));
        } else {
            echo json_encode(array('result' => 'fail'));
        }
    } catch (PDOException $exception) {
        die('ERROR: ' . $exception->getMessage());
    }
}
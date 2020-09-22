<?php

if($_POST) {

    include 'connectPDO.php';

    try {
        $query = "INSERT IGNORE INTO companyAssignment SET companyAssignmentId=:companyAssignmentId, companyId=:companyId, uid=:uid, username=:username";

        $stmt = $con->prepare($query);

        $stmt->bindParam(':companyAssignmentId', $_POST['companyAssignmentId']);
        $stmt->bindParam(':companyId', $_POST['companyId']);
        $stmt->bindParam(':uid', $_POST['uid']);
        $stmt->bindParam(':username', $_POST['username']);

        if ($stmt->execute()) {
            echo json_encode(array('result' => 'success'));
        } else {
            echo json_encode(array('result' => 'fail'));
        }
    } catch (PDOException $exception) {
        die('ERROR: ' . $exception->getMessage());
    }
}

<?php

if($_POST) {
    include 'connectPDO.php';

    try {
        $query = "INSERT INTO categories SET catId=:catId, catName=:catName, catDescription=:catDescription";

        $stmt = $con->prepare($query);

        $stmt->bindParam(':catId', $_POST['catId']);
        $stmt->bindParam(':catName', $_POST['catName']);
        $stmt->bindParam(':catDescription', $_POST['catDescription']);

        if ($stmt->execute()) {
            echo json_encode(array('result' => 'success'));
        } else {
            echo json_encode(array('result' => 'fail'));
        }
    } catch (PDOException $exception) {
        die('ERROR: ' . $exception->getMessage());
    }
}

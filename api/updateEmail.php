<?php

include('connectPDO.php');

$uid=isset($_GET['uid']) ? $_GET['uid'] : die('ERROR: UID not found.');
$email=isset($_GET['email']) ? $_GET['email'] : die('ERROR: User email not found.');

try {
    $sql = "UPDATE user SET email=? WHERE uid=?";
    $stmt = $con->prepare($sql);
    $stmt->execute([$email, $uid]);

    $row = $stmt->fetch(PDO::_FETCH_ASSOC);
    $json = json_encode($row);
    echo $json;
}

catch(PDOException $exception){
    die('ERROR: ' . $exception->getMessage());
}
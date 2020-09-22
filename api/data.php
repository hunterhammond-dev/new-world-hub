<?php

$id=isset($_GET['uid']) ? $_GET['uid'] : die('ERROR: Record ID not found.');

include 'connectPDO.php';

try {
    $query = "SELECT usr.uid, usr.name, usr.email, usr.profilePicture, pts.points
                FROM user usr
                LEFT JOIN (SELECT userReceive, COUNT(*) as points FROM points GROUP BY userReceive) pts ON pts.userReceive = uid
                WHERE uid = ? LIMIT 0,1";

    $stmt = $con->prepare( $query );

    $stmt->bindParam(1, $id);

    $stmt->execute();

    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    $json = json_encode($row);
echo $json;
}

// show error
catch(PDOException $exception){
    die('ERROR: ' . $exception->getMessage());
}


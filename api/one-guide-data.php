<?php

$guideId=isset($_GET['guideId']) ? $_GET['guideId'] : die('ERROR: Guide Id not found.');

include 'connectPDO.php';

try {
    $query = "SELECT gui.guideId, gui.guideSubject, gui.guideDate, gui.guideBy, gui.guideContent, gui.guideDesc, gui.image,
                TIMESTAMPDIFF(minute, guideDate, now()) as dateDiff,
                usr.name, usr.profilePicture
                FROM guides gui
                INNER JOIN (SELECT uid, name, profilePicture FROM user GROUP BY uid) usr ON usr.uid = gui.guideBy
                WHERE guideId = ?";
    $stmt = $con->prepare( $query );

    $stmt->bindParam(1, $guideId);

    $stmt->execute();

    $row = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $json = json_encode($row);
    echo $json;
}

catch(PDOException $exception){
    die('ERROR: ' . $exception->getMessage());
}
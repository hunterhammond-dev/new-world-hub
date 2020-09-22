<?php

$topicId=isset($_GET['topicId']) ? $_GET['topicId'] : die('ERROR: Topic Id not found.');

include 'connectPDO.php';

try {
    $query = "SELECT top.topicId, top.topicCat, top.topicSubject, top.topicDate, top.topicBy, top.topicContent, 
                TIMESTAMPDIFF(minute, topicDate, now()) as dateDiff,
                lik.likes, usr.name, usr.profilePicture, pts.points
                FROM topics top
                LEFT JOIN (SELECT post_id, COUNT(*) AS likes FROM likes GROUP BY post_id) lik ON lik.post_id = top.topicId
                INNER JOIN (SELECT uid, name, profilePicture FROM user GROUP BY uid) usr ON usr.uid = top.topicBy
                LEFT JOIN (SELECT userReceive, COUNT(*) as points FROM points GROUP BY userReceive) pts ON pts.userReceive = usr.uid 
                WHERE topicId = ?";
    $stmt = $con->prepare( $query );

    $stmt->bindParam(1, $topicId);

    $stmt->execute();

    $row = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $json = json_encode($row);
    echo $json;
}

catch(PDOException $exception){
    die('ERROR: ' . $exception->getMessage());
}
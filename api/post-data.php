<?php

$postTopic=isset($_GET['postTopic']) ? $_GET['postTopic'] : die('ERROR: Post not found.');

include 'connectPDO.php';

try {
    $query = "SELECT posts.postId, posts.postContent, posts.postDate, posts.postTopic, posts.postBy, 
              TIMESTAMPDIFF(minute, postDate, now()) as dateDiff, topics.likes, 
              user.name, user.profilePicture, topics.topicSubject, topics.topicContent, pts.points
              FROM posts
              LEFT JOIN user ON posts.postBy = user.uid 
              INNER JOIN topics ON posts.postTopic = topics.topicId 
              LEFT JOIN (SELECT userReceive, COUNT(*) as points FROM points GROUP BY userReceive) pts ON pts.userReceive = user.uid
              WHERE posts.postTopic = ?";

    $stmt = $con->prepare( $query );

    $stmt->bindParam(1, $postTopic);

    $stmt->execute();

    $row = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $json = json_encode($row);
    echo $json;
}

catch(PDOException $exception){
    die('ERROR: ' . $exception->getMessage());
}
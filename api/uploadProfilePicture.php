<?php

include_once("connect.php");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

if(isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);

    $uid = mysqli_real_escape_string($mysqli, (int)$request->uid);
    $profilePicture = mysqli_real_escape_string($mysqli, trim($request->profilePicture));

    $upload_name = time() . '_' . $profilePicture;

    $sql = "UPDATE user SET profilePicture = '$upload_name' WHERE uid = '$uid' LIMIT 1";

    if(mysqli_query($mysqli, $sql))
    {
        http_response_code(204);
    }
    else
    {
        return http_response_code(422);
    }
}


<?php

$response = array();
$upload_dir = 'assets/';
$server_url = 'http://127.0.0.1:8000';

if($_FILES['avatar'])
{
    $avatar_name = $_FILES["avatar"]["name"];
    $avatar_tmp_name = $_FILES["avatar"]["tmp_name"];
    $error = $_FILES["avatar"]["error"];

    $upload_name = time().'_'.$avatar_name;

    if($error > 0){
        $response = array(
            "status" => "error",
            "error" => true,
            "message" => "Error uploading the file!"
        );
    }else
    {

        move_uploaded_file($avatar_tmp_name, $upload_dir.$upload_name);
        
    }
}

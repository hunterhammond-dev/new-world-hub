<?php
if($_POST){
    include 'connect.php';
    try {
        $query = "INSERT INTO users SET uname=:uname,
        first_name=:first_name, last_name=:last_name,
        email=:email";

        $stmt = $con->prepare($query);

        $uname = $_POST['uname'];
        $first_name = $_POST['first_name'];
        $last_name = $_POST['last_name'];
        $email = $_POST['email'];

        $stmt->bindParam(':uname', $uname);
        $stmt->bindParam(':first_name', $first_name);
        $stmt->bindParam(':last_name', $last_name);
        $stmt->bindParam(':email', $email);

        if ($stmt->execute()) {
            echo json_encode(array('result'=>'success'));
        } else {
            echo json_encode(array('result'=>'fail'));
        }
    } catch(PDOException $exception) {
        die('ERROR: ' . $exception->getMessage());
    }
}
?>

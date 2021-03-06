<?php
session_start();

$xml = $xml = new DOMDocument();
$xml->load("users.xml");

$userList = $xml->getElementsByTagName("user");

$activeUsers = "<p id='aUsers'>Active Users:</br></p>";
foreach($userList as $user){
    $status = $user->getElementsByTagName("status")[0]->nodeValue;
    $usn = $user->getAttribute("username");
    $img = $user->getElementsByTagName("profilePic")[0]->nodeValue;
    $name = $user->getElementsByTagName("firstName")[0]->nodeValue. " " . $user->getElementsByTagName("lastName")[0]->nodeValue;
    if($status == "online"){
        if($_SESSION["activeUsers"] != $usn){
            $activeUsers .= "<span id='\"$usn\"' onclick='printUSN(\"$usn\")'><img class='user-img' src='$img'width='5px'/><p class='active-users' >$name</p></span><br>";
        }
    }
}
echo $activeUsers;

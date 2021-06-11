<?php session_start();
if(isset($_SESSION['users'])){
    $isLoggedIn = $_SESSION['users'];
    if($isLoggedIn == "Wrong")
        header("Location: index.php");
}else{
    header("Location: index.php");
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
    <link href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap' rel='stylesheet'>
    <link rel="stylesheet" href="style.css">
    <style>
        #modal{
            position: absolute;
            background-color: white;
            box-shadow: black 2px 2px 2px 2px;
            width: 40%;
            border-radius: 1em;
            height: max-content;
            display: none;
        }
        #title{
            text-align: center;
            font-weight: bolder;
        }
        hr{
            height: 1.5px;
            background-color: black;
            width: 95%;
        }
        label{
            font-weight: bolder;
        }
        p:not(#title){
            text-indent: 5px;
        }
        img{
            width: 42%;
            padding-left: 2%;
            padding-right: 8px;
        }
        img, #details{
            display: inline-block;
        }
        #details{
            vertical-align: top;
        }
        #user-panel{
            background-color: rgb(76, 235, 129);
            height: 200px;
            width: 400px;
        }
    </style>
</head>
<body >
    <div id="header">
        <button id="logout" >Log Out</button>
    </div>
    <div id="modal"></div>
    <form id="bside">
        <div id="table"></div>
        <div id="user-panel">Active Users:</div>
        <script src="table.js"></script>
    </form>
</body>
</html>
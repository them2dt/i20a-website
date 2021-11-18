<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="style/style.css">
    <link rel="stylesheet" type="text/css" href="style/transition.css">
    <link rel="stylesheet" href="style/styleform.css">
    <link rel="stylesheet" type="text/css" href="style/stylenav.css">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <script defer src="script/transition.js"></script>
    <script defer src="script/navbar.js"></script>
    <title>Formular</title>
</head>
<div class="wrapper">
<body>
    
<header>
        <nav>
            <div class="logo">
                <h4><img src="img/24S2.gif" alt="PC" width="50" height="50"></h4>
            </div>
            <div>
                <h4 class="logo">Geschichte des modernen Computers</h4>
            </div>
            <ul class="links">
            <li>
                <a onClick="document.location.href='index.html'" class="button" id="home">Home</a>
            </li>
            <li>
                <a class="button" onClick="document.location.href='quiz.html'">Quiz</a>
            </li>
            
                </ul>
            <div class="burger">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
        </nav>
    </header>

<div class="listBox">

<?php
$servername = "localhost";
$username = "id15521113_pchistory";
$password = "62umhh0snYY{#Y-s";

// Create connection
$conn = new mysqli($servername, $username, $password,'id15521113_main');


// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";


$sql = "SELECT model, Jahr FROM computers";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<br> id: ". $row["model"]. " - Jahr: ". $row["Jahr"]. "<br>";
    }
} else {
    echo "0 results";
}

$conn->close()
?>
</div>    
</body>
</div>
</html>
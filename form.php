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
<div class="transition transition-2 is-active">
    <div class="loadinggif">
        <h4><img src="img/loading.gif" alt="loading" width="100" height="100"></h4>
    </div>
</div>

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
            <li>
                <a class="button" onClick="document.location.href='list.php'">Uebersicht</a>
            </li>
        </ul>
        <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
    </nav>
</header>
<div class="formTitle">
    <h1 class="form">Kontaktformular</h1>
</div>

<div class="form">


    <form class="form" action="validation.php" method="GET">

        <p class="form">Ihr name:</p>
        <p class="form"><input class="form" type="text" name="name"></p>

        <p class="form">Ihre E-Mail:</p>
        <p class="form"><input class="form" type="email" name="mail" required="required"></p>

        <p class="form" id="nachricht">Ihre Nachricht:</p>
        <textarea class="messageBox" name="message" placeholder="Ihre Nachricht"></textarea>

        <p class="form"><input type="submit" class="form" value="Abschicken" name="senden"></p>
    </form>

</div>

</div>
</html>
<!DOCTYPE html>
<html>
    <head>
        <title>PHP variables</title>
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" 
        rel="stylesheet">

        <style>
            * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }

            body {
                font-family: 'Playfair Display', serif;
                font-size: 32px;
                width: 800px;
                margin: 50px auto;
            }
        </style>
    </head>
    <body>
        <!-- php -S localhost:4000 -->
        <!-- localhost:4000/poem.php -->

        <div style="background-color:azure; color: purple;">
        <!-- variables -->
        <?php
            $name ="George";
            $age = "70";

            echo("There once was a man named $name <br/>");
            echo("And he was $age years old.<br/>");
            echo("And though he had liked being named $name <br/>");
            echo("He didn't like being $age years old.<br/><br/>");

            $name ="Johnny";
            $age = "35";

            echo("There once was a man named $name <br/>");
            echo("And he was $age years old.<br/>");
            echo("And though he had liked being named $name <br/>");
            echo("He didn't like being $age years old.<br/><br />");
        ?>
        </div>
    </body>
</html>
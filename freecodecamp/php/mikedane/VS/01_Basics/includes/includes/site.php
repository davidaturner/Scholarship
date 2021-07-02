<!DOCTYPE html>
<!-- php -S localhost:4000 -->
<!-- include html, php -->
<html>
    <head>
        <meta charset="UTF-8">
        <title>PHP Include Examples</title>
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400&display=swap" 
            rel="stylesheet">
        <style>
            * {
                box-sizing: border-box;
                padding: 0;
                margin: 0;
            }
            body {
                font-family: 'Lora', serif;
                font-size: 26px;
            }
            .container {
                width: 95%;
                height: 720px;
            }
            .field {
                padding: 15px;
                margin: 15px;
                background-color: gainsboro;
                border: 1px solid red;
            }
        </style>
    </head>
    <body>
        <div class="container field">

            <?php include "header.html" ?>

            <div>
                <?php 
                    $loremipsum = "Loren ipsum";
                    $special1 = "Mauris";
                    $special2 = "Aliquam";
                    include "sitevars.php";
                    echo sayHi($joesantos)
                ?>
            </div>

            <?php include "footer.html" ?>
        </div>
    </body>
</html>
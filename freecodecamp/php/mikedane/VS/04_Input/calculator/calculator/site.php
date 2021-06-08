<!DOCTYPE html>
<html>
<!-- php -S localhost:4000-->
    <head>
        <meta charset="UTF-8">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap" 
            rel="stylesheet">
        <style>
            *{
                box-sizing: border-box;
                padding: 0;
                margin: 0;
            }
            body {
                font-family: 'Roboto Mono', monospace;
                font-size: 18px;
            }
            form {
                width: 70%;
                height: 50%;
                border: 1px solid red;
                margin: 40px auto;
                padding: 20px 60px;
            }
            form input {
                font-size: 1.0em;
                padding: 2px;
            }
            h2 {
                margin: 40px auto;
            }
            img {
                width: 70%;
                margin-left: 57px;

            }
            .container {
                display: relative;
                color: gainsboro;
                width: 600px;
                height: 690px;
                margin: 5px auto;
                background-color: grey;
                padding: 20px;
                opacity: 0.8;
            }
            .img {
                width: 70%;
                height: 200px;
                margin: 0 auto;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Hello, Kitty!</h1>
            <form action="site.php" method="GET">
                <h2>Calculate</h2>
                1: <input type="text" name="num1" /><br />
                2: <input type="text" name="num2" /><br /><br />
                R: 

                <?php
                    echo $_GET["num1"] + $_GET["num2"]
                ?>

                <br />
                <br />
                <input type="submit" />
            </form>
            <div class="img">
                <img src="hkitty.jpg">
            </div>
        </div>
    </body>
</html>
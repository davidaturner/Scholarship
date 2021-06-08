<!DOCTYPE html>
<html>
<!-- php -S localhost:4000-->
    <head>
        <meta charset="UTF-8">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap" 
            rel="stylesheet">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script>
            function onSubmit(Pnoun, color, verb, dobj) {
                console.log(Pnoun + ' are Red.');
                console.log('Violets are ' + color + '.');
                console.log('I ' + verb + ' fried chicken.');
                console.log('And so do ' + dobj + '.');
            }
        </script>
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
                margin: 40px auto;
                padding: 20px 60px;
            }
            form div {
                width: 100%;
                height: 100%;
                display: relative;
            }
            form input {
                font-size: 1.0em;
                padding: 2px;
            }
            h2 {
                margin: 40px auto;
            }
            p {
                font-size: 1.2em;
            }
            img {
                width: 70%;
                margin-left: 57px;

            }
            .active {
                display: block;
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
            .hide {
                display: none;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Hello, Kitty!</h1>
            <form action="site02.php" method="GET" id="theForm">
                <div id="forminput">
                    <h3>A Madlib</h3><br />
                    Plural Noun: <input type="text" name="Pnoun" /><br />
                    Color: <input type="text" name="color" /><br />
                    Verb: <input type="text" name="verb" /><br />
                    Direct Object<input type="text" name="dobj" /><br />
                    <br />
                    <input type="submit" />
                </div>
                <div id="formresult" class="hide">
                    <h3>A Madlib</h3><br /><br />
                    <p>Roses are Red</p><br />
                    <p>Violets are Blue</p><br />
                    <p>I eat more chicken</p><br />
                    <p>And so do you</p><br />
                </div>
            </form>
            <?php
                $Pnoun = $_GET["Pnoun"];
                $color = $_GET["color"];
                $verb = $_GET["verb"];
                $dobj = $_GET["dobj"];

                echo '<script>onSubmit('
                        ."'$Pnoun'". ", "
                        ."'$color'". ", "
                        ."'$verb'". ", "
                        ."'$dobj'".
                        ')</script>';
            ?>
            <div class="img">
                <img src="hkitty.jpg">
            </div>
        </div>
    </body>
</html>
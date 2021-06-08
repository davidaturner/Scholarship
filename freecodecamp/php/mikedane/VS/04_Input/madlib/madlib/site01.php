<!DOCTYPE html>
<html>
<!-- php -S localhost:4000-->
    <head>
        <meta charset="UTF-8">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap" 
            rel="stylesheet">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
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
                width: 100%;
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
            .container {
                display: relative;
                color: gainsboro;
                width: 600px;
                height: 690px;
                margin: 5px auto;
                background-color: grey;
                padding: 20px;
                opacity: 0.8;
                border: 1px solid red;
            }
            .img {
                height: 200px;
                margin-top: 30px;
            }
            .hide {
                display: none;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Hello, Kitty!</h1>
            <form action="site01.php" method="GET" id="theForm">
                <div id="forminput">
                    <h3>A Madlib</h3><br />
                    Plural Noun: <input type="text" name="Pnoun" /><br />
                    Color: <input type="text" name="color" /><br />
                    Verb: <input type="text" name="verb" /><br />
                    Direct Object<input type="text" name="dobj" /><br />
                    <br />
                    <input type="submit" /><br>
                    <div class="img">
                        <h3>Results:</h3><br />
                        <?php
                            $Pnoun = $_GET["Pnoun"];
                            $color = $_GET["color"];
                            $verb = $_GET["verb"];
                            $dobj = $_GET["dobj"];
                            echo "$Pnoun are Red.<br/>";
                            echo "Violets are $color.<br/>";
                            echo "I $verb friend chicken.<br/>";
                            echo "And so do $dobj.<br/>";
                        ?>
                    </div>
                </div>
            </form>
        </div>
    </body>
</html>
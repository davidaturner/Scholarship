<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <?php 
            $characterName = "John";
            $characterAge = 70;
            echo("<p><h2>There once was a man named $characterName</h2></p>");
            echo("<p><h2>He was $characterAge years old</h2></p>");
            $characterName = "Timothy";
            echo("<p><h2>He really liked the name $characterName</h2></p>");
            echo("<p><h2>But didn't like being $characterAge years old</h2></p>");

            # data types
            $phrase = "The rain in Spain falls mainly on the plain";
            $level = -30;
            $portion = 0.25;
            $isMale = true;

            echo "Hello";
            echo -30;
            echo $isMale;

            echo "<p><h2>Hello</h2></p>";
            echo "<p><h2>-30</h2></p>";
            echo "<p><h2>$isMale</h2></p>";

        ?>
    </body>
</html>
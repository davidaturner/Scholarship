<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <form action="site.php" method="get">
            <h2>Mad libs</h2>
            <label for="color">Color:</label>
            <input type="text" id="color" name="color" /><br />
            <label for="pluralnoun">Pluralnoun:</label>
            <input type="text" id="pluralnoun" name="pluralnoun" /><br />
            <label for="verb">Verb:</label>
            <input type="text" id="verb" name="verb" /><br />
            <label for="celebrity">Celebrity:</label>
            <input type="text" id="celebrity" name="celebrity" /><br />
            <input type="submit" />
        </form>
        <?php 
            $color = $_GET["color"];
            $pluralnoun = $_GET["pluralnoun"];
            $verb = $_GET["verb"];
            $celebrity = $_GET["celebrity"];

            #echo "<p>Roses are {color}</p>";
            #echo "<p>{pluralnouns} are blue</p>";
            #echo "<p>Donkeys {verb} Elephants</p>";
            #echo "<p>And {celebrity} does too!</p>";

            echo "<p>Roses are $color</p>";
            echo "<p>$pluralnoun are blue</p>";
            echo "<p>Donkeys $verb Elephants</p>";
            echo "<p>And $celebrity does too!</p>";
        ?>
    </body>
</html>
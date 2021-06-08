<!DOCTYPE html>
<html>
    <head>
        <title>PHP arrays</title>
    </head>
    <body>
        <?php
            echo "<h1>Hello, World!</h1>";
            $friends = array("Kevin", "Karen", "Jim", "Oscar");
            $stuff = array("Topper", 1, 12, "true");

            echo $friends[0];
            echo "<br /><br />";

            echo $stuff[1];
            echo "<br />";

            echo $stuff[3];
            echo "<br />";
            $stuff[3]="Dwight";
            echo $stuff[3];
            echo "<br />";

            $stuff[9] = "true";
            echo $stuff[9];
            echo "<br />";

            echo count($stuff);


        ?>
    </body>
</html>
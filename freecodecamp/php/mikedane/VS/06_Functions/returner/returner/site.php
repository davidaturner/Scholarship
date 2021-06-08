<!DOCTYPE html>
<html>
    <head>
        <title>PHP return statements</title>
    </head>
    <body>
        <?php
            echo("<h1 style='color:orangered'>Hello, World!</h1>");
        ?>
        <h2 style="color:green">PHP functions</h2>

        <?php
            function cube($val) {
                return $val * $val * $val;
            }
        ?>
        <?php
            $cubed = cube(0);
            echo "<h1>$cubed</h1>";
            $cubed = cube(1);
            echo "<h1>$cubed</h1>";
            $cubed = cube(3);
            echo "<h1>$cubed</h1>";
            $cubed = cube(4);
            echo "<h1>$cubed</h1>";
            $cubed = cube(6);
            echo "<h1>$cubed</h1>";
        ?>
    </body>
</html>
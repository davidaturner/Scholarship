<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <?php 
            $whole = 40;
            $portion = 2.7;
            echo "<h3>$whole $portion</h3>";
            echo 4 + 5;
            echo "<br />";
            echo 15 - 23;
            echo "<br />";
            $whole++;
            echo "<h3>$whole $portion</h3>";
            $whole--;
            $portion += 25.3;
            echo "<h3>$whole $portion</h3>";
            $func = abs(-33);
            echo "<h3>$func</h3>";            
            $func = pow(2, 3);
            echo "<h3>$func</h3>";
            $func = sqrt(144);
            echo "<h3>$func</h3>";
            $func = max(2, 10);
            echo "<h3>$func</h3>";
            $func = round(3.2);
            echo "<h3>$func</h3>";
            $func = ceil(3.2);
            echo "<h3>$func</h3>";
            $func = floor(3.9);
            echo "<h3>$func</h3>";

        ?>
    </body>
</html>
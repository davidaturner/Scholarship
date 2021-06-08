<!DOCTYPE html>
<html>
    <head>
        <title>PHP If..Then</title>
    </head>
    <body>
    <!-- php -S localhost:4000 -->
    <!-- Logical operator: >= -->
        <h1>Hello, World!</h1>
        <?php
            function getMax($num1, $num2) {
                if ($num1 >= $num2){
                    return $num1;
                } else {
                    return $num2;
                }
            };
            function getMaxThreeway($num1, $num2, $num3){
                return getMax( getMax($num1, $num2), $num3);
            }
        ?>

        <?php
            echo getMax(63, 49);
            echo "<br />";
            echo getMax(49, 63);
            echo "<br />";
            echo getMaxThreeway(39, 29, 71);
        ?>
    </body>
</html>
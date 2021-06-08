<!DOCTYPE html>
<html>
    <head>
    <title>Site</title>
    </head>
    <body>
    <!-- php -S localhost:4000 -->
    <!-- add, subtract, multiple, division, module, order of precedent -->
        <?php
            echo 40;

            $break = "<br />";
            echo $break;

            echo 40.23; echo $break;

            echo 2 + 2; echo $break;
            echo 800 - 34; echo $break;
            echo 4 * 2; echo $break;
            echo 4 % 3; echo $break;

            echo 4 + 5 * 9; echo $break;

            $num = 11;
            $num += 14;
            echo $num; echo $break;

            $num %= 25;
            echo $num; echo $break; 

        ?>
    </body>
</html>
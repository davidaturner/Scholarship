<!DOCTYPE html>
<html>
    <head>
    <title>Site</title>
    </head>
    <body>
    <!-- php -S localhost:4000 -->
    <!-- increment, decrement, abs, max, min, round, ceil -->
        <?php

        
            $ten = 10;
            $break = "<br />";
            echo $ten; echo $break;

            /* Store ten into eleven then increment ten */
            $eleven = $ten++;
            echo $eleven; echo $break;
            $ten--;
            /* Increment ten then store into eleven */
            $eleven = ++$ten;
            echo $eleven; echo $break;

            echo abs(-2); echo $break;

            $maxie = max(-2, 10);
            echo $maxie; echo $break;

            $minie = min(-2, 10);
            echo $minie; echo $break;

            $round = round(35.255);
            echo $round; echo $break;

            $ceiling = ceil(35.755);
            echo $ceiling; echo $break;



        ?>
    </body>
</html>
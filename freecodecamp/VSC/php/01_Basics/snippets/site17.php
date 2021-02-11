<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>

        <?php 
            $i = 0;

            while($i < 10) {
                echo "$i <br />";
                $i++;
            }
            $j = 6;
            
            do {
                echo "$j <br />";
                $j++;
            } while($j < 10);
        ?>
    </body>
</html>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>

        <?php 

            // for($i=0; $i<=10; $i++) {
            //     echo "$i <br />";
            // }

            $luckynumbers = array(4, 8, 12, 15, 33);
            for($number=0; $number<=count($luckynumbers); $number++) {
                echo "$luckynumbers[$number] <br />";
            }
        ?>
    </body>
</html>
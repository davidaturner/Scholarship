<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>PCP Examples</title>
    </head>
    <body>
        <form action="site.php" method="post">
            <h1>For Encounter</h1>
            Enter Limit: <input type="number" name="num"/>
            <input type="submit" />
        </form>

        <?php
            $val = array(4, 2, 5, 7, 6, 8, 9, 10);
            $num = $_POST["num"];
            // echo("Comments are fun!");
            if ($num > count($val)) {
                echo("Exceeding array limit: ".count($val));
            } else {
                for($i=0;$i<$num;$i++) {
                    $val_i = $i + 1;
                    echo("<p>$val_i. $val[$i]</p>");
                }
            }
        ?>
    </body>
</html>
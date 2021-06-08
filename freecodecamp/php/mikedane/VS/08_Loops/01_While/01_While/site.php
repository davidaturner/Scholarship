<!DOCTYPE html>
<html>
<!-- php -S localhost: 4000 -->
    <head>
        <meta charset="UTF-8">
        <title>PCP Examples</title>
    </head>
    <body>
        <form action="site.php" method="post">
                Enter Limit: <input type="number" name="limit" /><br /><br />
        </form>

        <?php
            $limit = $_POST["limit"];
            $num = 1;
            do {
                echo($num."<br />"); 
                $num += 1;
            } while ($num <= $limit);
        ?>
    </body>
</html>
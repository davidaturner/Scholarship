<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <form action="site.php" method="post">

            <!-- First : <input type="number" name="first_number"><br /> -->
            First : <input type="number" step="0.1" name="first_number"><br />
            <!-- Second : <input type="number" name="second_number"><br /> -->
            Second : <input type="number" step="0.1" name="second_number"><br />
            Op: <input type="text" name="op"><br /><br>

            <input type="submit" />
        </form>

        <?php 
            $first_number = $_POST["first_number"];
            $second_number = $_POST["second_number"];
            $op = $_POST["op"];

            if ($op == "+") {
                echo $first_number + $second_number;
            } elseif ($op == "-") {
                echo $first_number - $second_number;
            } elseif ($op == "*") {
                echo $first_number * $second_number;
            } elseif ($op == "/" and $second_number != 0) {
                echo $first_number / $second_number;
            } else {
                echo "Calc Not Ready!";
            }
        ?>
    </body>
</html>
<!DOCTYPE html>
<html>
    <head>
        <title>PHP If..Then</title>
    </head>
    <body>
    <!-- php -S localhost:4000 -->
    <!-- step, allows us to enter float/doubles into html-->
        <form action="calculator.php" method="post">
            <h1>Calculator Part 2</h1><br />
            N1: <input type="number" step="0.001" name="num1"/><br />
            OP: <input type="text" name="op"/><br />
            N2: <input type="number" step="0.001" name="num2"/><br /><br /><br />
            <input type="submit" />
        </form>

        <?php
            $num1 = $_POST["num1"];
            $num2 = $_POST["num2"];
            $op = $_POST["op"];

            if ($op == '+') {
                echo $num1 + $num2;
            } elseif ($op == '-') {
                echo $num1 - $num2;
            } elseif ($op == '*') {
                echo $num1 * $num2;
            } elseif ($op == '/') {
                if ($num2 != 0) {
                    echo $num1 / $num2;
                } else {
                    echo "Cannot divide by zero!";
                }
            } else {
                echo "Invalid operator!";
            }
        ?>
    </body>
</html>
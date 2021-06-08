<!DOCTYPE html>
<html>
    <head>
        <title>PHP If..Then</title>
    </head>
    <body>
        <!-- Logical operators: &&, Also: if, elseif, else -->
        <h1>Hello, World!</h1>
        <?php
            $isMale = false;
            $isTall = false;
            if ($isMale && $isTall) {
                echo "You are a Tall Male.";
            } elseif ($isMale) {
                echo "You are a Male.";
            } elseif ($isTall) {
                echo "You are Tall.";
            } else {
                echo "You are not Male and not Tall.";
            }
        ?>
    </body>
</html>
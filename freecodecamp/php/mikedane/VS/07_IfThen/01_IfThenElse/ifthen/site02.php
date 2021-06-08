<!DOCTYPE html>
<html>
    <head>
        <title>PHP If..Then</title>
    </head>
    <body>
    <!-- Logical operators: ! and || -->
        <h1>Hello, World!</h1>
        <?php
            $isMale = true;
            $isTall = true;
            if ($isMale || $isTall) {
                if ($isMale && !$isTall) {
                    echo "You are a Male.";
                } else if (!$isMale && $isTall) {
                    echo "You are Tall.";
                } else {
                    echo "You are a Male and you are Tall.";
                }
            } else {
                echo "You are not Male and not Tall.";
            }
        ?>
    </body>
</html>
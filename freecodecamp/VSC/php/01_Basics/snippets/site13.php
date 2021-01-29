<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>

        <?php 

            // >=, <=, !=, ==, >, <, =
            function determineMax($a, $b, $c) {

                if ($a >= $b && $a >= $c ) {
                    return $a;
                } elseif ($b >= $c && $b >= $a) {
                    return $b;
                } else {
                    return $c;
                }
            }

            echo determineMax(18, 60, 60);
            // function determineMax($a, $b) {

            //     if ($a > $b) {
            //         return $a;
            //     }
            //     return $b;
            // }

            // echo determineMax(18, 6);
        ?>
    </body>
</html>
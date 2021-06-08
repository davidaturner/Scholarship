<!DOCTYPE html>
<html>
<!-- php -S localhost: 4000 -->
    <head>
        <meta charset="UTF-8">
        <title>PCP Examples</title>
    </head>
    <body>
        <form action="site.php" method="post">
                Enter Grade: <input type="text" name="grade" /><br /><br />
        </form>

        <?php
            $grade = $_POST["grade"];
            switch($grade) {
                case "A":
                    echo("AMAZING! Well done, sir!");
                    break;
                case "B":
                    echo("You have done pretty well.");
                    break;
                case "C":
                    echo("It's ok, but can do better.");
                    break;
                case "D":
                    echo("You did poorly.");
                    break;
                case "F":
                    echo("YOU FAILED!!");
                    break;
                default:
                    echo("Not a recognized grade, sir.");
                    break;
            }
        ?>
    </body>
</html>
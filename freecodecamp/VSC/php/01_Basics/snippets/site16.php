<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <form action="site.php" method="post">

            What is my grade?: 
            <input type="text" name="grade"><br />

            <input type="submit" />
        </form>

        <?php 
            $grade = $_POST["grade"];

            switch($grade) {
                case 'A':
                    echo "You did (A)mazing!";
                    break;
                case 'B':
                    echo "Not (B)ad";
                    break;
                case 'C':
                    echo "You (C)an do better!";
                    break;
                case 'D':
                    echo "Schedule a (D)ate with Tutor";
                    break;
                case 'E':
                    echo "(E), for um, (E)ffort?";
                    break;
                case 'F':
                    echo "You (F)ailed!";
                    break;
                default:
                    echo "Invalid grade";
                    break;
            }
        ?>
    </body>
</html>
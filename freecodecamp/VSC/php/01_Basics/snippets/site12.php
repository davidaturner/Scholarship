<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
    <!-- <form action="site.php" method="post">
        Enter Student: <input type="text" name="student" /><br />
        <input type="submit" />
    </form> -->
        <?php 
                $isTall = true;
                $isMale = false;

                if ($isTall && $isMale) {               # && and ||
                    echo("You are a tall male.");
                }
                else if ($isTall) {
                    echo("You are tall.");
                }
                else if ($isMale) {
                    echo("You are short male.");
                }
                else {
                    echo("You are neither tall nor male.");
                }
        ?>
    </body>
</html>
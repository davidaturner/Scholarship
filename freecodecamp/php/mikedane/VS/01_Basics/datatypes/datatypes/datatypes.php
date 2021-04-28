<!DOCTYPE html>
<html>
    <head>
        <title>Data types in PHP</title>
    </head>
    <body style="background-color: azure">
        <?php 
            echo("<h1 style='color:blue;'>Hello, World</h1>")
        ?>

        <div style="width: 60%;">
        <!-- datatypes: string, number/integer, number/float, boolean -->
            <?php
                $phrase = "John Turner"; 
                $age = 37;
                $gpa = 4.25;
                $isMale = true;

                /* each echo MUST be on a separate line. */
                echo("John Turner<br/>");
                echo(37); 
                echo("<br/>");
                echo(4.25); 
                echo("<br/>");
                echo(true); 
                echo("(true)<br/>");
                echo("<br/><br/>");

                echo("<h2>$phrase is $age years old and <sub>isMale</sub> is $isMale(true) and has a gpa of $gpa.</h2>");

            ?>
        </div>
    </body>
</html>
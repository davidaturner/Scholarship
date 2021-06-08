<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Site</title>
    </head>
    <body>
        <!-- php -S localhost:4000 -->

        <!-- strtolower, strtoupper, strlen, str[index], str_replace, substr -->
        <?php
            echo "<h1>Giraffe Academy!</h1>";

            $phrase = "<h2>Giraffe Academy</h2>";
            echo $phrase;

            echo strtolower($phrase);
            echo strtoupper($phrase);
            echo strtoupper("<h3>Dog</h3>");
            echo strlen($phrase);

            $break = "<br />";
            echo($break);

            $justgiraffe = "Giraffe";
            echo $justgiraffe[0]; echo($break);
            echo $justgiraffe[1]; echo($break);
            echo $justgiraffe[2]; echo($break);

            $justgiraffe[0] = "B";
            echo $justgiraffe; echo($break);

            $phrase2 = str_replace("Giraffe", "Panda", $phrase);
            echo $phrase2;
            echo $phrase;

            echo $justgiraffe; echo($break);
            echo substr($justgiraffe,0,6); echo($break);

        ?>
    </body>
</html>
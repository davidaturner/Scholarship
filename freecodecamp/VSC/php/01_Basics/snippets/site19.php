<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <?php
            $title = "The Warbler";
            $episode = "The bold and the brave";

            // variables must be declared first
            include "site-header.html";

            include "site-hhelper.php";

            echo $helloworld;
            sayhi("Mike");

            $title="The Robin of the Morning";
            $episode="Fear and Wuthering";
        ?>

        <p>Suspendisse consequat risus sed diam mattis imperdiet. Morbi non odio posuere, congue orci non, ultrices elit. Donec vel iaculis ante. In consectetur elit eget massa tristique, in placerat turpis aliquam.</p>
        
        <?php include "site-hfooter.html" ?>
    </body>
</html>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <?php 
            $phrase = "Cover me";
            echo "<h3>$phrase</h3>";
            $nextphrase = strtoupper($phrase);
            echo "<h3>$nextphrase</h3>";
            $nextphrase = strtolower($phrase);
            echo "<h3>$nextphrase</h3>";
            $nextphrase = strlen($phrase);
            echo "<h3>$nextphrase</h3>";
            $nextphrase = $phrase[0];
            echo "<h3>$nextphrase</h3>"; 
            $nextphrase = $phrase; 
            $nextphrase[0] = "B";
            echo "<h3>$nextphrase</h3>"; 
            $nextphrase = str_replace("Cover", "Blanket", $phrase); 
            echo "<h3>$nextphrase</h3>";
            $nextphrase = substr($phrase, 6, 2);
            echo "<h3>$nextphrase</h3>";


        ?>
    </body>
</html>
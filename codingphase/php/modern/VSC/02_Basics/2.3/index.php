<?php
    $name = "Joe";
    $accusation = "Hey ${name}, you owe me money!";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Example</title>
</head>
<body>
    <!-- download xampp and install.
    open xampp control panel in admin mode
    click apache config button/menu - Apache (httpd-config)
    do a find on "documentRoot"
    update documentRoot and <Directory>. save.
    turn on apache server and mysql/mariadb. 
    database would be at 3306. 
    php server (chrome) - localhost: 80. -->
    <h1 style="color:olivedrab"><?php echo $accusation ?></h1>

    <p><?php echo 2 + 2 ?></p> 
    <p><?php echo 2 + 2.656 ?></p>
    <p><?php echo 2 - 4 ?></p>
    <p><?php echo 2 * 4 ?></p>
    <p><?php echo 2 / 4 ?></p>
    <p><?php echo 2 % 4 ?></p>
    <p><?php echo 2 ** 4 ?></p>
    <p><?php echo 2 ** 4 + 200 ?></p>
    <?php
        $a = 10;
        $b = 20;

        $a +=18;
        $b++;

        $c = ($a < $b)?1:0; //using 0 for false.
        $total = ((2 + 2) * ((4 / 2) + (3**3)))
    ?>
    <p style="color:olivedrab"><?php echo $a ?></p>
    <p style="color:olivedrab"><?php echo $b ?></p>
    <p style="color:olivedrab"><?php echo $c ?></p>
    <p style="color:olivedrab"><?php echo $total ?></p>

    <?php 
        $x = 2;
        $y = 4;  
        $useX = $x == 2;
        $useY = $y == 4; 
        $lessthan = $y < $x; 
    ?>

    <h1 style="color:orangered">Comparisons</h1>
    <p><?php echo $x?></p>
    <p><?php echo $y?></p> 
    <p><?php echo $useX?></p>
    <p><?php echo $useY?></p> 
    <p><?php if ($useX && $useY) echo 10;?></p>
    <p><?php if ($useX and $useY) echo 10;?></p>
    <p><?php if (!$lessthan) echo 20?></p>

    <?php 
        $hello = "Hello";
        $world = "World";
        // concatenate and assign.
        $helloworld = $hello;
        $helloworld .= " ";
        $helloworld .=$world;
    ?>
    <p style="max-width:300px;background:red;color:white;"><?php echo $hello.", ".$world."!"?></p> 
    <p style="max-width:300px;background:black;color:white;"><?php echo $helloworld?></p> 
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Numbers</title>
</head>
<body>
    <h2 style="color:red"><?php echo 3 ?></h2>
    <h2 style="color:red"><?php echo 3.98 ?></h2>
    <h2 style="color:red"><?php echo 3 + 4 ?></h2>
    <h2 style="color:red"><?php echo 3 * 5 ?></h2>
    <h2 style="color:red"><?php echo 3 / 3 ?></h2>
    <h2 style="color:red"><?php echo 3 - 5 ?></h2>
    <h2 style="color:red"><?php echo 13 % 7 ?></h2>
    <h2 style="color:red"><?php echo 3**5  ?></h2>
    <h2 style="color:red"><?php echo 3 > 1 ?></h2>
    <h2 style="color:red"><?php echo 1 > 2 ?></h2>
    <h2 style="color:red"><?php echo 7 == 7 ?></h2>
    <h2 style="color:red"><?php echo 7 !== "7" ?></h2>
    <h2 style="color:red"><?php echo "Fanpage"?></h2>    
    <?php 
        $x = 3 >= 1;
    ?>
    <h2 style="color:red"><?php echo $x ?></h2>
    <h2 style="color:red"><?php $x = 4; echo $x ?></h2>
    <!-- PEMDAS -->
    <?php 
        $x = (2 + 2) * ((14 / 7) + (4**3));
        $name = "Joe";
        $name.= " Luis Santos";
        $car = ( 7 === 7 )?"Honda":"Toyota"
    ?>
    <h2 style="color:red"><?php echo $x ?></h2>
    <h2 style="color:green"><?php echo $name ?></h2>
    <h2 style="color:yellowgreen"><?php echo $car ?></h2>
</body>
</html>
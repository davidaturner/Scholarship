<?php
    $car;
    const STORE = "Macys";
    define("HORNES", "Horne's") // alt way to define constant
?>

<?php
    $car = "Benz";
?>

<!-- Strings -->
<?php
    $x = "Hello world X!";
    $y = 'Hello world Y!';

    echo $x;
    echo "<br>";
    echo $y;
?>

<!-- Integer -->
<?php
    $x = 5985;
    var_dump($x);
?>

<!-- Float -->
<?php
    $x = 10.365;
    var_dump($x);
?>

<!-- Boolean -->
<?php 
    $x = true;
    $y = false;
    echo $x;
    echo $x;

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Variables</title>
</head>
<body>
    <h2><?php echo $car; ?></h2>
    <h2><?php echo STORE; ?></h2>
    <h2><?php echo HORNES; ?></h2>
</body>
</html>
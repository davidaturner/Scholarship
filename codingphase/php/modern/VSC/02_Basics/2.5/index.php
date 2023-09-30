<?php
    $name = "Joe";
    $accusation = "Hey ${name}, you owe me money!";
    $cars = ["Benz", "Toyota", "BMW"];
    $cars_old = array("Benz", "Toyota", "BMW");
    $multi = ["Benz", "Toyota", "BMW", [1, 2, 3, 4, 5]];
    $address = [
        "street" => "1313 Mockingbird Ln",
        "city" => "PA"
    ]
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Example</title>
</head>
<body>
    <!-- 
        1. download xampp and install.
        2. open xampp control panel in admin mode
        3. click apache config button/menu - Apache (httpd-config)
        4. do a find on "documentRoot"
        5. update documentRoot and <Directory>. save.
        turn on apache server and mysql/mariadb. 
        database would be at 3306. 
        php server (chrome) - localhost: 80. 
    -->
    <h1 style="color:olivedrab"><?php echo $accusation ?></h1>
    <!-- <h1><?php echo $cars ?></h1> -->
    <h1><?php echo $cars[0] ?></h1>
    <h1><?php echo $cars[1] ?></h1>
    <h1><?php echo $cars[2] ?></h1>

    <h1><?php echo $multi[3][2] ?></h1>

    <h1><?php echo $address["city"] ?></h1>
    <h1><?php echo var_dump($address)?></h1>
</body>
</html>
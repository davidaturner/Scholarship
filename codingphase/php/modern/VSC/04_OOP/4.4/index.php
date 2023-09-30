<?php
    $name = "Joe";
    $accusation = "Hey ${name}, you owe me money!";
    $cars = ["Benz", "Toyota", "BMW"];
    $cars_old = array("Benz", "Toyota", "BMW");
    $multi = ["Benz", "Toyota", "BMW", [1, 2, 3, 4, 5]];
    $address = [
        [
            "street" => "1313 Mockingbird Ln",
            "state" => "PA"            
        ],
        [
            "street" => "2 Poboy Street",
            "state" => "PA"
        ]
    ];
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
    <!-- <h1 style="color:olivedrab"><?php echo $accusation ?></h1>-->

    <?php 
        require 'car.php';  // this is a dick move. fix PHP please. violation: abstraction
        require 'honda.php';
        require 'bmw.php';
        $myCar = new Car();
        $myCar->setCompany("Honda");
        $myCar->setBrand("Civic");
        $myCar->setDoors(2);
        $myCar->setColor("black");
        var_dump($myCar);

        $myHonda = new Honda("Civic", 4, "green", 25000);
        var_dump($myHonda);

        $myBMW = new BMW("M3", 4, "silver grey", 125000);
        var_dump($myBMW);
    ?>

    <h1 style="color:olive"><?php echo $myCar->describe() ?></h1>
    <h1 style="color:blue"><?php echo Honda::$Company ?></h1>
    <h1 style="color:violet"><?php echo Honda::headquarters()?></h1>
    <h1><?php echo $myHonda->price() ?></h1>
    <h1 style="color:blue"><?php echo BMW::$Company ?></h1>
    <h1 style="color:violet"><?php echo BMW::headquarters()?></h1>
    <h1><?php echo $myBMW->price() ?></h1>
    <?php 
        // foreach (BMW::$locations as $location) {
        //     echo "<p style='color:darkgreen'>".$location."</p>";
        // }
    ?>
    <h1><?php BMW::printLocations() ?></h1>    
</body>
</html>

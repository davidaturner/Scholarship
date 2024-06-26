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
        require 'vehicle.php'; // dick move.
        require 'car.php';  // this is a dick move. fix PHP please. violation: abstraction
        require 'honda.php';
        require 'bmw.php';
        require 'inventory.php';

        // dependency injection
        $search = new InventorySearch();
        // $company = "Honda";
        // $result = $search->getTotalByCompany($company);

        $myHonda = new Honda("Civic", 4, "green", 25000, 5, $search);
        $result1 = $myHonda->getTotalByCompany();
        $myBMW = new BMW("M3", 4, "green", 125000, 4, $search);
        $result2 = $myBMW->getTotalByCompany();
        $total = $search->countCompanies();

    ?>
    <h1><?php $myHonda->describe(); ?></h1>
    <h1><?php $myHonda->price(); ?></h1>
    <h1 style="color:olivedrab"><?php echo "Number of Hondas available: ".$result1 ?></h1>
    <h1><?php $myBMW->describe(); ?></h1>
    <h1><?php $myBMW->price(); ?></h1>
    <h1 style="color:olivedrab"><?php echo "Number of BMWs available: ".$result2 ?></h1>
    <h1><?php echo "Total companies in inventory: {$total}"?></h1>
</body>
</html>

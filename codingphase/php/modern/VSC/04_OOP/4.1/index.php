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

    const AMAZON_KEY = "AmazonProduct";
    $amazon_product = "Macbook Air Pro";
    setcookie(AMAZON_KEY, $amazon_product, time()+(60*10), "/");
    // set cookie to expire 30 days.
    // setcookie(AMAZON_KEY, $amazon_product, time()+(86400 *30), "/");
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

    <!-- <?php 
    //classes are objects
        class Car_1 {
            public function __construct() {
                echo "Construct function running.";
            }
        }

        $honda = new Car_1();
    ?> -->

    <?php 
        class Car {

            public function __construct($brand, $doors=4) {
                // $this->doors = 4;
                $this->doors = $doors;
                $this->brand = $brand;
            }

            public function printBrand() {
                echo $this->brand;
            }
        }

        $honda = new Car("Honda");
        var_dump($honda);
    ?>

    <h1 style="color:olive"><?php echo $honda->printBrand() ?></h1>
</body>
</html>

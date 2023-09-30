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

    <?php 
        function add($a, $b) {
            return $a + $b;
        }

        // function print_add($a, $b) {
        //     echo $a + $b;
        // }

        function print_add($a, $b) {
            echo add($a, $b);
        }

        $result = add(2, 2);

        function addTwo($a) {
            echo add($a, $b = 2); // set default.
        }
    ?>

    <h1 style="olive"><?php echo add(1024, 24) ?></h1>
    <h1 style="olive"><?php print_add(567, 134) ?></h1>
    <h1 style="olive"><?php echo addTwo(18) ?></h1>
    <h1 style="olive"><?php echo $result ?></h1>

    <?php  
        function nameCity($name, $city) {
            $redName = "<span style='color:red'>{$name}</span>";
            $greenCity = "<span style='color:green'>{$city}</span>";
            echo "My name is {$redName} and I was born in {$greenCity}.";
        }
    ?>

    <h1 style="font-size:48px"><?php nameCity("Joe", "Miami") ?></h1>
</body>
</html>
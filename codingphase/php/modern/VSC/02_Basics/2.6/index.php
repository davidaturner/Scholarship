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
    // for loops
        // for($i=0;$i<10;$i++) {
        //     // echo "<span>".$i." </span>";
        //     echo "<h1>Joe is {$i} years old.</h1>";
        // }
        // for($i=0;$i<3;$i++) {
        //     echo "<h1>My car is a {$cars[$i]}.</h1>";
        // }

        // for($i=0;$i<count($address);$i++) {
        //     echo "<h1>I live at {$address[$i]["street"]}.</h1>";
        // };
    // foreach loop
        foreach($address as $item) {
            echo "<h1>I live at {$item["street"]}.</h1>";
        }
    // while loop
        // $i = 0;
        // while($i < count($address)) {
        //     echo "<h1>I live at {$address[$i]["street"]}.</h1>";
        //     $i++;
        // }
        echo "<br />";
    ?>
</body>
</html>
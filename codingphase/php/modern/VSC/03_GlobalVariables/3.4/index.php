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

    <?php 
        // if (isset($_COOKIE[AMAZON_KEY])) {
        //     echo "Cookie found! ".$_COOKIE[AMAZON_KEY]." Have a coupon on us!";
        // } else {
        //     echo "Bad dog! No cookie!";
        // }
        $isCookieSet = isset($_COOKIE[AMAZON_KEY])?"Yes!":"No sir.";
        $cookieFound = $_COOKIE[AMAZON_KEY];
    ?>
    <h1>Was a cookie set? <span style="color:green"><?php echo $isCookieSet ?></span></h1>
    <p>Cookie Found! <span style="font-size:36px;color:olive"><?php echo $cookieFound ?></span>. Have a coupon on us!</p>
</body>
</html>
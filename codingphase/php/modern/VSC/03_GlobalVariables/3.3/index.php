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
    <!-- <h1 style="color:olivedrab"><?php echo $accusation ?></h1>
    <?php 
    // Superglobals 
    //         $GLOBALS
    //         $_SERVER 
    //         $_REQUEST 
    //         $_POST 
    //         $_GET 

        echo $_SERVER['REQUEST_METHOD'];
        echo " ".$_SERVER['QUERY_STRING'];

        if (empty($_REQUEST['fname'])) {
            echo "this is empty";
        } else {
            echo "Hi, {$_REQUEST['fname']}!";
        }
    ?> -->

    <h1><?php echo $_SERVER['REQUEST_METHOD']; ?></h1>
    <h1><?php echo " ".$_SERVER['QUERY_STRING'];?></h1>
    <h1 style="color:olive"><?php 
        if (empty($_REQUEST['fname'])) {
            echo "this is empty";
        } else {
            echo "Hi, {$_REQUEST['fname']}!";
        } ?>
    </h1>

    <form action="index.php" method="POST">
        Name: <input type="text" name="fname" />
        <button type="submit">Submit</button>
    </form>

    <!-- now add on request line - ?fname=Charlie - no quotes. -->

</body>
</html>
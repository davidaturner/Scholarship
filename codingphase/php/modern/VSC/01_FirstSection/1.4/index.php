<?php
    $name = "Joe Santos"
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Example</title>
</head>
<body>
    <!-- download xampp and install.
    open xampp control panel in admin mode
    click apache config button/menu - Apache (httpd-config)
    do a find on "documentRoot"
    update documentRoot and <Directory>. save.
    turn on apache server and mysql/mariadb. 
    database would be at 3306. 
    php server (chrome) - localhost: 80. -->

    <h1 style="color:orangered"><?php echo $name; ?></h1>
</body>
</html>
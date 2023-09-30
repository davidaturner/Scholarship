<?php
    $name = "Joe";
    $accusation = "Hey ${name}, you owe me money!";
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
        $age = 22;

        $canEnterBar = $age >= 21;
        $cannotEnterBar = !$canEnterBar;
        $comeBackInFew = $age >= 18 and ($cannotEnterBar == true);

        $hardcoreSentence = ($canEnterBar)? "Welcome to the bar. Have a drink!"
                                            : "Sorry you are too young to enter.";
        $softcoreSentence; 
        if ($canEnterBar) {
            $softcoreSentence = "Welcome to the bar. Have a drink!";
        } elseif ($comeBackInFew) {
            $softcoreSentence = "You can chill in the restaurant. But you can't drink.";
        } else {
            $softcoreSentence = "Sorry you are too young to enter.";                
        }
    ?>

    <h1><?php echo $age?></h1>
    <h1><?php echo $canEnterBar?"true":"false" ?></h1>
    <h1><?php echo $cannotEnterBar?"true":"false" ?></h1>
    <h1><?php echo $comeBackInFew?"true":"false" ?></h1>

    <h1 style="color:purple"><?php echo $hardcoreSentence?></h1>
    <h1 style="color:orangered"><?php echo $softcoreSentence?></h1>

    <?php 
        $age = 19;
        $canEnterBar = false;
        $cannotEnterBar = false;
        $comeBackInFew = false;
        switch($age) {
            case $age >= 21:
                $canEnterBar = true;
                break;
            case $age < 21 && $age >= 18:
                $comeBackInFew = true;
                break;
            default:
                $cannotEnterBar = true;             
        }

        $hardcoreSentence = ($canEnterBar)? "Welcome to the bar. Have a drink!"
                                            : "Sorry you are too young to enter.";
        $softcoreSentence; 
        if ($canEnterBar) {
            $softcoreSentence = "Welcome to the bar. Have a drink!";
        } elseif ($comeBackInFew) {
            $softcoreSentence = "You can chill in the restaurant. But you can't drink.";
        } else {
            $softcoreSentence = "Sorry you are too young to enter."; 
        }
    ?>

    <h1><?php echo $age?></h1>
    <h1><?php echo $canEnterBar?"true":"false" ?></h1>
    <h1><?php echo $cannotEnterBar?"true":"false" ?></h1>
    <h1><?php echo $comeBackInFew?"true":"false" ?></h1>

    <h1 style="color:purple"><?php echo $hardcoreSentence?></h1>
    <h1 style="color:orangered"><?php echo $softcoreSentence?></h1>

</body>
</html>
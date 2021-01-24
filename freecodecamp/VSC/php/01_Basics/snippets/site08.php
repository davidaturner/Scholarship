<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <?php 
            $friends = array("Elle", "Jacob", "Billy", "Tom");
            print($friends);
            print($friends[0]);
            print($friends[2]);
            $friends[2] = "Caleb";
            print($friends[2]);
            print(count($friends));
        ?>
    </body>
</html>
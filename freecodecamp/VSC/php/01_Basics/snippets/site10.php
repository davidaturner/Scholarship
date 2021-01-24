<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
    <form action="site.php" method="post">
        Enter Student: <input type="text" name="student" /><br />
        <input type="submit" />
    </form>
        <?php 
            #Associative array is similar to Hashmap. Using key: value pairs.
            $grades = array("Jim"=>"A", "Pablo"=>"B", "Carole"=>"A+");
            // echo $grades["Carole"];
            $student = $_POST["student"];
            echo $grades[$student];
        ?>
    </body>
</html>
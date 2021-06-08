<!DOCTYPE html>
<html>
<!-- php -S localhost:4000 -->
    <head>
        <title>PHP associative array</title>
    </head>
    <body style="background-color:gainsboro">
    <!-- An associative array is the storing of key-value pairs -->
    <?php
        echo "<h1>Hello World!</h1>";
    ?>
    <h2 style="color:red">Associative Array</h2>
    <?php
        $grades=["Jim"=>'A', "Carl"=>'B', "Darla"=>'A+'];
        # show grades to the key => 'Darla'
        # value is "A+"
        echo $grades['Darla'];
        echo "<br />";
        $grades['Carl'] = 'B+';
        echo $grades['Carl']

    ?>
    <form action="site.php" method="post">
        <input type="text" name="student" /><br />
        <input type="submit" />
    </form>
    <?php
        echo $grades[$_POST['student']]
    ?>
    </body>
</html>
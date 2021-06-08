<!DOCTYPE html>
<html>
    <head>
        <title>PHP function examples</title>
    </head>
    <!-- php -S localhost:4000-->
    <body style="background-color:gainsboro">
        <?php
            echo "Test 1";
        ?>

        <h2 style="color:red">Helloworld Examples!</h2>
        <?php
            function helloworld() {
                echo "<h1>Hello, World!</h1>";
            }
            function hello_($name){
                echo "<h1 style='color:orangered'>Hello, $name!</h1>";
            }
            function helloage($name, $age) {
                echo "<h1 style='color:red'>Hello $name, $age!</h1>";
            }
        ?>
        <h4 style="color:green">GO!</h4>
        <?php
            helloworld();
        ?>
        <?php
            hello_('Jack');
            hello_('Frank');
        ?>
        <?php
            helloage("Timothy", 46);
        ?>
        <?php
            helloworld();
            helloage('Mark', 12);
        ?>
    </body>
</html>
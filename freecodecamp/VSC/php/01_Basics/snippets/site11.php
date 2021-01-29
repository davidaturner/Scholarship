<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
    <!-- <form action="site.php" method="post">
        Enter Student: <input type="text" name="student" /><br />
        <input type="submit" />
    </form> -->
        <?php 

            function helloWorld() {
                echo "Hello, World! <br />";
            }

            function sayHi($name) {
                echo "Hi, My name is $name <br />";
            }

            function sayHiAndAge($name, $age) {
                echo "Hi, My name is $name, $age <br />";
            }

            function cube($number) {
                return $number * $number * $number;
            }

            helloWorld();
            sayHi("Frank");
            sayHi("Thomas");
            sayHiAndAge("Libby", 56);

            // echo uses a period (.) to concat
            echo cube(2);
            echo "<br />";
            
            echo cube(2) . " <br />";

            $testnum = cube(2);
            echo "$testnum <br />";

            $testnumber = 2;
            echo cube($testnumber) . " <br />";
        ?>
    </body>
</html>
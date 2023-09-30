<?php
    $car;
    $name = "Joe";
    $car = "Benz";
    const STORE = "Macy's";
    define('Radio', "Hot 97");

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

    <h1 style="color:orangered">
        <?php 
        //strings
            echo $name;
            echo $car;
            echo STORE;
            echo Radio; 
            echo "<br />";
        //integer
            $x = 5885;
            var_dump($x);
        //float
            var_dump(35.4);
        //boolean
            var_dump(true);
            echo("<br />");
        //array
            // $cars = ["BMW", "Ford", "Chevrolet"];
            $cars = array("BMW", "Ford", "Chevrolet");
            var_dump($cars);
            echo "<br />";
        // object
        $address = [
            "address" => "1313 Mockingbird Ln",
            "city" => "Amyville",
            "state" => "New York City",
            "zip" => "15223",
            "isResident" => true
        ];

        echo $address["address"];
        echo "<br />";
        // class
        class Car {
            public $color;
            public $model;
            function __construct($color, $model) {
                $this->color = $color;
                $this->model = $model;
            }
            // function _construct($color, $model) {
            //     $this->color = $color;
            //     $this->model = $model;
            // }
            function getColor() {
                return $this->color;
            }
            function setColor($color) {
                $this->color = $color;
            }
            function getModel() {
                return $this->model;
            }
            function setModel($model) {
                $this->model = $model;
            }
            function message() {
                return "My car is a " . $this->getColor(). " " . $this->getModel(). "!";
            }
        }
        $myCar = new Car("white", "TransAm");
        // $myCar->setColor("black");
        // $myCar->setModel("Sedan");
        echo $myCar->message();
        echo "<br />";

        echo $lover = null; // null value is NOT echo-ed.
        ?>
    </h1>
</body>
</html>
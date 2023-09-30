<?php 
    class Car {
        public $company = "Company";
        public $brand = "Generic";
        public $doors = 4;
        public $color = "black";

        function describe() {
            echo "Hi, I drive a {$this->doors}-door {$this->color} {$this->company} {$this->brand}";
        }

    }
?>


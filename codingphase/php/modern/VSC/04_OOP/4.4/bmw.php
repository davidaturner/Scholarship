<?php
    class BMW extends Car {
        public static $Company = "BMW";
        private $price = 0;
        public function __construct($brand, $doors, $color, $price=0) {
            $this->company = BMW::$Company;
            $this->brand = $brand;
            $this->doors = $doors;
            $this->color = $color;
            $this->price = $price;
        }

        public static $locations = [
            "PA",
            "NY",
            "SC",
            "AZ",
            "CA"
        ];

        public function price() {
            echo "The price of this {$this->company} {$this->brand} {$this->doors}-door is {$this->price}!";
        }

        public static function headquarters() {
            return "Munich, Germany";
        }

        public static function printLocations() {
            foreach(self::$locations as $location) {
                echo "<p style='color:darkgreen;font-size:18px;'>".$location."</p>";
            }
        }
    }
?>
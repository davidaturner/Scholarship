<?php
    class Honda extends Car {
        public static $Company = "Honda";
        private $price = 0;
        public function __construct($brand, $doors, $color, $price=0) {
            $this->company = Honda::$Company;
            $this->brand = $brand;
            $this->doors = $doors;
            $this->color = $color;
            $this->price = $price;
        }
        public function price() {
            echo "The price of this {$this->company} {$this->brand} {$this->doors}-door is {$this->price}!";
        }

        public static function headquarters() {
            return "Queens, NY";
        }
    }
?>
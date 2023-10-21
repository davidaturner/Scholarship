<?php
    class BMW extends Car {
        private $price = 0;
        public function __construct($brand, $doors, $color, $price=0, $company="BMW") {
            $this->company = $company;
            $this->brand = $brand;
            $this->doors = $doors;
            $this->color = $color;
            $this->price = $price;
        }
        public function price() {
            echo "The price of this {$this->company} {$this->brand} {$this->doors}-door is {$this->price}!";
        }
    }
?>
<?php 
    class Car extends Vehicle {
        public $seatingCapacity;
        public function __construct($company, $brand, $doors, $color, $price,
                                    $seatingCapacity=5) {
            $this->company = $company;
            $this->brand = $brand;
            $this->doors = $doors;
            $this->color = $color;
            $this->price = $price;
            $this->seatingCapacity = $seatingCapacity;
        }

        public function getSeatingCapacity() {
            return $this->seatingCapacity;
        }

        public function setSeatingCapacity($seatingCapacity) {
            $this->seatingCapacity = $seatingCapacity;
        }

        public function describe() {
            echo "Hi, I drive a {$this->doors}-door {$this->color} {$this->company} {$this->brand}";
        } 

        // public function price() {
        //     echo "The price of this {$this->company} {$this->brand} is {$this->price}!";
        // }

        public function describeSeatingCapacity() {
            echo "My car can seat {$this->seatingCapacity}";
        }
    }
?>


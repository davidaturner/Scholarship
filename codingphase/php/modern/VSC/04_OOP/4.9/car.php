<?php 
    namespace Html\CarType;
    class Car {
        public $company;
        public $brand;
        public $seatingCapacity;
        public function __construct($company, $brand, $seatingCapacity) {
            $this->company = $company;
            $this->brand = $brand;
            $this->seatingCapacity = $seatingCapacity;
        }

        public function message() {
            echo "My {$this->company} {$this->brand} has a seating capacity of {$this->seatingCapacity}.";
        }
    }

    $honda = "Honda";
    $bmw = "BMW";

    const FOO = 1;
?>
<?php 
    namespace Html\TruckType;
    class Truck {
        public $company;
        public $brand;
        public $cargoRoom;
        public $loadCapacity;
        public function __construct($company, $brand, $cargoRoom, $towingCapacity) {
            $this->company = $company;
            $this->brand = $brand;
            $this->cargoRoom = $cargoRoom;
            $this->towingCapacity = $towingCapacity;
        }

        public function message() {
            echo "My {$this->company} {$this->brand} has a cargo room of {$this->cargoRoom} and a towing capacity of {$this->towingCapacity}.";
        }
    }

    const FOO = 2;
?>
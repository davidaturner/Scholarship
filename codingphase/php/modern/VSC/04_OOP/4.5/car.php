<?php 
    class Car {
        protected $company = "Company";
        protected $brand = "Generic";
        protected $doors = 4;
        protected $color = "black";

        public function getCompany() {
            return $this->company;
        }
        public function getBrand() {
            return $this->brand;
        }
        public function getDoors() {
            return $this->doors;
        }
        public function getColor() {
            return $this->color;
        }

        public function setCompany($company) {
            $this->company = $company;
        }
        public function setBrand($brand) {
            $this->brand = $brand;
        }
        public function setDoors($doors) {
            $this->doors = $doors;
        }
        public function setColor($color) {
            $this->color = $color;
        }


        public function describe() {
            echo "Hi, I drive a {$this->doors}-door {$this->color} {$this->company} {$this->brand}";
        }

    }
?>


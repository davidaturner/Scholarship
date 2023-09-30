<?php
    // abstract classes cannot be substatiated.
    abstract class Vehicle {
        protected $company;
        protected $brand;
        protected $doors;
        protected $colors;
        protected $price;

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

        public function getPrice() {
            return $this->price;
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

        public function setPrice($price) {
            $this->price = $price;
        }

        abstract function describe();

        public function label() {
            return "{$this->company} {$this->brand}";
        }

        public function price() {
            echo "The price of this {$this->label()} is {$this->price}!";
        }
    }

?>
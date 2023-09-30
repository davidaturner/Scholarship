<?php
    class Honda extends Car {
        public static $Company = "Honda";
        // private $price = 0;
        public function __construct($brand, 
                                    $doors, 
                                    $color, 
                                    $price,
                                    $seatingCapacity,
                                    InventorySearch $inventory) {
            parent::__construct(self::$Company,
                                    $brand,
                                    $doors,
                                    $color,
                                    $price,
                                    $seatingCapacity);
            // $this->company = self::$Company;
            // $this->brand = $brand;
            // $this->doors = $doors;
            // $this->color = $color;
            // $this->price = $price;
            // dependency injection
            $this->inventory = $inventory;
        }

        public static $locations = [
            "PA",
            "NY",
            "SC",
            "AZ",
            "CA"
        ];
        
        // public function price() {
        //     echo "The price of this {$this->company} {$this->brand} {$this->doors}-door is {$this->price}!";
        // }

        public static function headquarters() {
            return "Queens, NY";
        }

        public static function printLocations() {
            foreach(self::$locations as $location) {
                echo "<p style='color:darkgreen;font-size:18px;'>".$location."</p>";
            }
        }

        public function getTotalByCompany() {
            return $this->inventory->getTotalByCompany(self::$Company);
        }
    }
?>
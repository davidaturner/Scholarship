<?php

    class InventorySearch {
        public $byCompany = [
            'Honda' => 250, 
            'BMW' => 78
        ];
        public function getTotalByCompany($company) {
            return $this->byCompany[$company];
        }
    }
?>
<?php
    interface InventoryInterface {
        function countCompanies();
    }

    class InventorySearch implements InventoryInterface {
        public $byCompany = [
            'Honda' => 250, 
            'BMW' => 78
        ];
        public function getTotalByCompany($company) {
            return $this->byCompany[$company];
        }
        public function countCompanies() {
            $total = 0;
            foreach($this->byCompany as $company) {
                $total++;
            }
            return $total;
        }
    }
?>
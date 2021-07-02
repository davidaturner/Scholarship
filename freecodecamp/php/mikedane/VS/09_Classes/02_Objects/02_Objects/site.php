<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>PHP Class Examples</title>
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Mate:ital@0;1&display=swap" rel="stylesheet">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <style>
            * {
                box-sizing: border-box;
                padding: 0;
                margin: 0;
            }
            body {
                font-family: 'Mate', serif;
                font-size: 32px;
            }
            .container {
                width: 95%;
                height: 720px;
                margin: 25px;
                padding: 15px;
            }
            .grey {
                background-color: gainsboro;
            }
        </style>
    </head>
    <!-- php -S localhost:4000 -->
    <body>
        <div class="container grey">
            <p>Hello, World!</p><br />
            <?php
                class Chef {
                    public $name;
                    private $restaurant;

                    public function getRestaurant() {
                        return $this->restaurant;
                    }
                    public function setRestaurant($rest) {
                        if ($this->isRestaurantMichelinStar($rest) === true) {
                            $this->restaurant = $rest;  
                        } else {
                            $this->restaurant = "NotRated";
                        }
                    }
                    public function isRestaurantMichelinStar($rest) {
                        if ( ($rest == "Altius") ||
                                ($rest == "The Capital Grille") ||
                                ($rest == "Paris 66 Bistro")) {
                            return true;
                        } 
                        else {
                            return false;
                        }
                    }
                }

                $chef1 = new Chef;
                $chef1->name = "Chef Barkley";
                $chef1->setRestaurant("Paris 66 Bistro");

                echo "$chef1->name<br />";

                // echo "$chef1->restaurant<br />";
                $res = $chef1->getRestaurant();
                echo "$res<br />";
            ?>
        </div>

        <script>
            $(function() {
                console.log("Ready!")
            })
        </script>
    </body>
</html>
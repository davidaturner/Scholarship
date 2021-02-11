<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <?php
            class Chef {
                function makeChicken () {
                    echo "The Chef makes a chicken dish.";
                }
                function makeSalad () {
                    echo "<p>The Chef makes a salad.</p>";
                }
                function makeSpecial () {
                    echo "<p>The Chef makes a bbq ribs dish.</p>";
                }
            }

            class ItalianChef extends Chef {
                function makeSpecial () {
                    echo "<p>The Chef makes a chicken parm.</p>";                    
                }
                function makePasta () {
                    echo "<p>The Chef makes a pasta dish.</p>";
                }
            }
            $chef = new ItalianChef();
            $chef->makeChicken();
            $chef->makeSalad();
            $chef->makeSpecial();
            $chef->makePasta();

            $chef = new Chef();
            $chef->makeSpecial();


        ?>
    </body>
</html>
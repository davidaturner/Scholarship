<?php 
# strings
$a = "Hello world!";
$b = 'Hello world!';

// echo $a;
// echo "<br>";
// echo $b;

#integer
$c = 5985;
var_dump($c);

#float/double
$d = 10.365;
var_dump($d);

#boolean
$e = true;
$f = false;

#array
$cars = array("Volvo","BMW","Toyota");
var_dump($cars);

#object
class Car {
  public $color;
  public $model;
  public function __construct($color, $model) {
    $this->color = $color;
    $this->model = $model;
  }
  public function message() {
    return "My car is a " . $this->color . " " . $this->model . "!";
  }
}
$myCar = new Car("black", "Volvo");
echo $myCar -> message();
echo "<br>";
$myCar = new Car("red", "Toyota");
echo $myCar -> message();

#null
$g = "Hello world!";
var_dump($g);
$g = null;
var_dump($g);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Examples</title>
</head>
<body>
    <h1 style="color:olive"> <?php echo $a ?> </h1>
    <h1 style="color:orange"> <?php echo $a ?> </h1>
</body>
</html>
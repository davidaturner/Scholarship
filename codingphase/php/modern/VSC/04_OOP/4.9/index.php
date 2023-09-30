<?php 
    namespace Html;
    include('car.php');
    include('truck.php');
    use Html\CarType\Car as Car;
    use Html\CarType as Ct;
    use Html\TruckType\Truck as Truck;

    $hiWorld = "Hello, World!";
    $myCar = new Car("Honda", "Civic", 10);
    $myOtherCar = new Ct\Car("BMW", "M3", 5);
    $myTruck = new Truck("Chevrolet", "F150", 10, 3);
?>

<h1 style="color:olivedrab"><?php echo $hiWorld ?></h1>
<h1 style="color:olivedrab"><?php echo $myCar->message() ?></h1>
<h1 style="color:olivedrab"><?php echo $myOtherCar->message() ?></h1>
<h1 style="color:olivedrab"><?php echo $myTruck->message() ?></h1>

<h1 style="color:olivedrab"><?php echo $honda ?></h1>
<h1 style="color:olivedrab"><?php echo $bmw ?></h1>

<h1 style="color:olivedrab"><?php echo Ct\FOO ?></h1>
<h1 style="color:red"><?php echo \Html\TruckType\FOO ?></h1>
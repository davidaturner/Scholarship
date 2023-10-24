<?php

// if your php file is all php, don't enclose tag.
echo 'Hello, World!';

// run php file in command terminal.
// cd C:\xampp\htdocs\programwgio
// php index.php

// echo vs print
// 1. print returns 1 so you use in an expression.
echo print '0 + 1=';
// 2. echo allows concat.
// echo 'Hi, ' + " " + "Caramel.";
echo "Hi, "," ","Caramel.";

echo 'Joe\'s garage';

$location = "Joe's garage";
echo $location;

$x = 1;
$y = $x;
$x = 3;
echo $y;

$a = 1;
$b = &$a;
$b = 3;
echo $a;

$joesantos = 'Joe Santos';
echo 'Hi, my name is $joesantos';
echo "Hi, my name is $joesantos";

echo "Hello "."Poutine!";
<?php
    $name = "Joe";
    $sentence = "My name is ";
    $pname = "<p style='color:greenyellow'>Sam</p>"
?>

<?php
    $x = 'joe luis santos';
    echo $x."<br/>";
    echo "Length of string is: ".strlen($x);
    echo "<br>Count of word: ".str_word_count($x);
    echo "<br>Reverse the string: ".strrev($x);
    echo "<br>Position of string: ".strpos('Have a nice day!','nice');  //2 argument
    echo "<br>String replace: ".str_replace('good','nice','have a good day!');  //3 argument
    echo "<br>String convert to uppercase: ".strtoupper($x);
    echo "<br>String convert to lowercase: ".strtolower($x);
    echo "<br>convert first character into uppercase: ".ucfirst('good day');
    echo "<br>convert first character into lowercase: ".lcfirst('Good noon');
    echo "<br>convert first character of each word into uppercase: ".ucwords('keep going on!');
    echo "<br>Remove space from left side: ".ltrim("        hi..");
    echo "<br>Remove space from right side: ".rtrim("hello          ");
    echo "<br>Remove both side of space: ".trim("       keep learning       ");
    echo "<br>string encrypted with MD5: ".md5($x);
    echo "<br>Compare both string: ".strcoll('Hello','Hello')."<br>".strcmp('kinjal',$x);
    echo "<br>Return part of string: ".substr('Hello Everyone',2);
    echo "<br>Return part of string: ".substr('Hello Everyone',0,5);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1><?php echo $sentence. $name ?></h1>
    <h1><?php echo "Hi you owe me money, ". $name; ?></h1>
    <!-- Note: String functions use double quotes only-->
    <h1><?php echo 'Wait. I am mistaken. Sorry {$name}!'; ?></h1>
    <h1><?php echo "Wait. I am mistaken. Sorry {$name}!"; ?></h1>
    <h1><?php echo "Wait. I am mistaken. Sorry ". strtoupper($name)."!"; ?></h1>
    <br />
    <h1><?php echo $pname ?></h1>
    <!-- strip all HTML tags -->
    <h1><?php echo strip_tags($pname) ?></h1>
</body>
</html>
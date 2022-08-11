<?php 
    $name = "Joe Santos";
    const HELLOWORLD = "Hello, World!";
    define ('LEMON', "Lemon!");
    // This is a comment.
    $himynameis = "Hi. My name is "
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello, World!</title>
</head>
<body>
    <?php $slimshady = "Slim Shady"; ?>
    <h1><?php echo "Hi. Mine name is " . $slimshady; ?></h1>
    <h2><?php echo "Hey. You owe me money {$slimshady}"; ?></h2>

    <h2 id="root"></h2>
    <!-- More with string functions https://www.php.net/manual/en/book.strings.php -->
    <?php 
        $helloworld = "Hello, World!";
        echo $helloworld;
        echo "<br>";
        // strtoupper
        echo strtoupper($helloworld);
        echo "<br>";
        // strrev
        echo strrev($helloworld);
        echo "<br>";
        $heyyou = "<p style='color:green'>Hey you owe me money <em>{$slimshady}</em></p>";
    ?>
    <h2><?php echo $heyyou; ?></h2>
    <!-- strip_tags -->
    <h2><?php echo strip_tags($heyyou); ?></h2>
</body>
</html>
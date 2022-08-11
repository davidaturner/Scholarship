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
    <?php 
    echo HELLOWORLD; 
    echo "<br>";
    echo LEMON;
    echo "<br>";
    $slimshady = "Slim Shady!";
    echo $himynameis . $slimshady;
    echo "<br>";
    ?>
    <h1><?php echo "Hi. Mine name is " . $slimshady; ?></h1>
    <h2><?php echo "Hey. You owe me money {$slimshady}"; ?></h2>
    <h4><?php echo 'Hey. You owe me money {$slimshady}'; ?></h4>
</body>
</html>
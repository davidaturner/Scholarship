<?php
    
    const AGE_DRINK_LIMIT = 21;
    const AGE_CHILL_LIMIT = 18;
    
    $age = 21;
    // echo("<h1>Hi! I am ".$age." years old.</h1><br/>");
    switch($age) {
        case $age >= AGE_DRINK_LIMIT:
            $message = "<span style='color:green'>
                            Welcome to the bar!
                        </span>";
            break; // Don't forget the breaks!
        case $age >= AGE_CHILL_LIMIT and $age < AGE_DRINK_LIMIT:
            $message = "<span style='color:yellowgreen'>
                            Welcome to the bar! You must be ".AGE_DRINK_LIMIT." 
                            years old to drink.
                        </span>";
            break;
        default:        
            $message = "<span style='color:red'>
                            Sorry. You must be ".AGE_CHILL_LIMIT." or older 
                            to enter this bar.
                        </span>";
    }
//     if ($age >= AGE_DRINK_LIMIT) {
//         echo "Welcome to the bar!";
//     } elseif( $age >= AGE_CHILL_LIMIT and $age < AGE_DRINK_LIMIT) {
//         echo "Welcome to the bar! You must be ".AGE_DRINK_LIMIT." years old to drink.";
//     } else {
//         echo "Sorry. You must be ".AGE_CHILL_LIMIT." or older to enter this bar.";
//     };
// //  } else {
// //         echo "Sorry. You must be ".ageLimit." or older to enter this bar.";
// //     };
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Conditions</title>
    <style>
        p {
            font-size: 22px;
            font-weight: 700;
        }
    </style>
</head>
<body>
    <h1 style="color:magenta">The Bouncer!</h1><br/>

    <p>
        You: 
        <span style='color:yellowgreen'>Hi! I am <?php echo $age ?> years old.</span>
    </p>

    <p>Boucher: <?php echo $message ?></p>

</body>
</html>
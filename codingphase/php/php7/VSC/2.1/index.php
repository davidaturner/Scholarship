<?php 
// single line comment
# single line comment
/*
multiline comment 
paragraph

$name = "Mickey Mouse"
*/
    $myfirsth = "My first header";
    $myfirstp = "My first paragraph";
    $myname = "Joe";
    $myhname = "<span style='font-size:36px'>Joe</span>";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Examples</title>
</head>
<body>
    <!-- <h1>My first header</h1>
    <p>My first paragraph.</p> -->
    <h1><?php echo $myfirsth ?></h1>
    <p><?php echo $myfirstp ?></p>
    <p style="color:lightblue">My name is <?php echo $myname ?>.</p>
    <p style="color:blue">My name is <?php echo $myhname ?>.</p>
    <?php echo "<p style='font-size:48px;color:yellowgreen'>My name is {$myname}</p>" ?>
</body>
</html>
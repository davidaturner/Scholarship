<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <form action="site.php" method="get">
            <input type="number" name="number1"><br />
            <input type="number" name="number2"><br />
            <input type="submit" />
        </form>

        Answer: 
        <?php 
            echo $_GET["number1"] + $_GET["number2"]
        ?>
    </body>
</html>
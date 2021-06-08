<!DOCTYPE html>
<html>
    <head>
        <title>Checkbox Examples</title>
    </head>
    <body>
        <?php
            echo "<h1>Hello, World</h1>"    
        ?>
        <form action="site.php" method="post">
            Apples: <input type="checkbox" name="fruits[]" value="apples" /><br />
            Oranges: <input type="checkbox" name="fruits[]" value="oranges" /><br />
            Pears: <input type="checkbox" name="fruits[]" value="pears" /><br />
            <input type="submit" />
        </form>
        <?php
            $fruits = $_POST["fruits"];
            echo $fruits[0];
        ?>
    </body>
</html>
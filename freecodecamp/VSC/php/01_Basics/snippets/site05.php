<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <form action="site.php" method="get" />
            <input type="text" name="name" placeholder="Name" />
            <br />
            <input type="text" name="age" placeholder="Age" />
            <br />
            <input type="submit" />
        </form>
        <br />

        Your name is
        <?php 
            echo $_GET['name']
        ?>
        <br />

        You are <?php echo $_GET['age'] ?> years old.
    </body>
</html>
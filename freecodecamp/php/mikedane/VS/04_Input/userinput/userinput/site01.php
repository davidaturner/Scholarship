<!DOCTYPE html>
<html>
	<head>
		<title>Site</title>
	</head
    <!-- php -S localhost:4000 -->
	<body>

       <!-- for user input, use a form -->
       <form action="site.php" method="get">
            Enter: <input type="text" name="myname" value="your name"/>
            <br />
            Enter: <input type="text" name="myage" value="your age"/>
            <input type="submit">
       </form>

       Your name is 
       <?php
            echo $_GET["myname"]
       ?>
       <br />
       Your age is
       <?php
            echo $_GET["myage"]
       ?>
	</body>
</html>
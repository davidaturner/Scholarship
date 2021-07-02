<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>PHP Class Examples</title>
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Mate:ital@0;1&display=swap" rel="stylesheet">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <style>
            * {
                box-sizing: border-box;
                padding: 0;
                margin: 0;
            }
            body {
                font-family: 'Mate', serif;
                font-size: 32px;
            }
            .container {
                width: 95%;
                height: 720px;
                margin: 25px;
                padding: 15px;
            }
            .grey {
                background-color: gainsboro;
            }
        </style>
    </head>
    <!-- php -S localhost:4000 -->
    <body>
        <div class="container grey">
            <p>Hello, World!</p><br />

                    <?php 
            // Classes, Objects, Constructors
            class Book {
                var $title;
                var $author;
                var $pages;

//                function __construct(){
//                    echo "<i>"."constructor executed"."</i><br />";
//                }

                function __construct($aTitle, $aAuthor, $aPages){
                    $this->title = $aTitle;
                    $this->author = $aAuthor;
                    $this->pages = $aPages;
                }
            }
/*
            $book1 = new Book;
            $book1->title ="Harry Potter";
            $book1->author ="JK Rowlings";
            $book1->pages = 400;

            echo $book1->title."<br />";
            echo $book1->author."<br />";
            echo $book1->pages."<br /><br />";
*/
            $book2 = new Book("Lord of the Rings", "JRR Tolkein", 700);

            echo "Title: $book2->title<br />";
            echo "Author: $book2->author<br />";
            echo "Pages: $book2->pages<br />";
        ?>
        </div>

        <script>
            $(function() {
                console.log("Ready!")
            })
        </script>
    </body>
</html>
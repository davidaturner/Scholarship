<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <?php
            class BookTypeA {
                var $title;
                var $author;
                var $numPages;
            }

            class BookTypeB {
                var $title;
                var $author;
                var $numPages;

                function __construct($title, $author, $numPages) {
                    $this->title = $title;
                    $this->author = $author;
                    $this->numPages = $numPage;
                }
                function sayHi($name) {
                    echo "<h3>Hello, $name!</h3>";
                }
            }

            //object or instance
            $book = new BookTypeA;
            $book->title = "The Starling";
            $book->author = "C.K. Fetter";
            $book->numPages = 169;

            echo $book->numPages;

            $bookB = new BookTypeB("The Starling", "C.K. Fetter", 169);

            echo "<h2>$bookB->author</h2>";
            echo $bookB->sayHi("Frank");
        ?>
    </body>
</html>
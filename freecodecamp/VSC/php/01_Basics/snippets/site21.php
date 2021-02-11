<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <?php
            class Movie {
                private $title;
                private $rating;

                function __construct($title, $rating) {
                    $this->title = $title;
                    $this->setRating($rating);
                }

                function getRating() {
                    return $this->rating;
                }
                function setRating($rating) {
                    if ($rating == "PG13" || $rating == "R") {
                        $this->rating = $rating;
                    }
                }
            }

            $movie = new Movie("The Avengers", "R");
            $movie->setRating("PG14");
            echo $movie->getRating();


        ?>
    </body>
</html>
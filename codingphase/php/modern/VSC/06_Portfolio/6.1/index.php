<!DOCTYPE html>
<html class="no-js" lang="en">
<head>
<!-- using https://styleshout.com/free-templates/ethos/ -->
<!-- first turn on LiveServer change
then turn on XAMPP and view http://localhost:8080 
rename index.html to index.php.
-->

    <!--- basic page needs
    ================================================== -->
    <meta charset="utf-8">
    <title>Ethos</title>
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- move common 'head' information to head.php -->
    <?php require('includes/head.php') ?>
</head>

<body id="top" class="home__page">

    <?php require('includes/preloader.php') ?>

    <?php require('includes/header.php') ?>

    <!-- hero - homepage
    ================================================== -->
    <section id="hero" class="s-hero target-section" data-parallax="scroll" data-image-src="images/hero-bg-3000.jpg" data-natural-width=3000 data-natural-height=2000 data-position-y=center>

        <div class="row hero-content">

            <div class="column large-full">

                <h1>
                Hello, I'm John Doe, <br>
                a frontend developer <br>
                & designer currently <br>
                based somewhere.
                </h1>

                <ul class="hero-social">
                    <li>
                        <a href="#0" title="">Twitter</a>
                    </li>
                    <li>
                        <a href="#0" title="">Behance</a>
                    </li>
                    <li>
                        <a href="#0" title="">Dribbble</a>
                    </li>
                </ul> <!-- end hero-social -->

            </div> 

        </div> <!-- end hero-content -->

        <div class="hero-scroll">
            <a href="#about" class="scroll-link smoothscroll">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 24l-8-9h6v-15h4v15h6z"/></svg>
            </a>
        </div> <!-- end hero-scroll -->

    </section> <!-- end s-hero -->

    <?php require('includes/photoswipe.php')?>

    <?php require('includes/scripts.php')?>

</body>
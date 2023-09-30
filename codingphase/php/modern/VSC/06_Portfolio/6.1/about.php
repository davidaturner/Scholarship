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

<body id="top">

    <?php require('includes/preloader.php') ?>

    <?php require('includes/header.php') ?>

    <!-- about
    ================================================== -->
    <section id="about" class="s-about target-section">

        <div class="s-about__section s-about__section--profile">

            <div class="right-vert-line"></div>

            <div class="row">
                <div class="column large-6 medium-8 tab-full">

                    <div class="section-intro" data-num="01" data-aos="fade-up">
                        <h3 class="subhead">About Me</h3>
                        <h1 class="display-1">I'm the kind of person who isn't afraid of challenges.</h1>
                    </div>

                    <div class="profile-pic" data-aos="fade-up">
                        <img src="images/profile-pic.jpg" 
                             srcset="images/profile-pic.jpg 1x, images/profile-pic@2x.jpg 2x" alt="">
                    </div>

                    <h3 data-aos="fade-up">Profile</h3>

                    <p data-aos="fade-up">
                    In consectetuer turpis ut velit. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. 
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis 
                    mi consectetuer lacinia. Fusce neque. Curabitur nisi. Suspendisse nisl elit, rhoncus eget, elementum ac, 
                    condimentum eget, diam. Phasellus magna. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, 
                    ipsum. Maecenas egestas arcu quis ligula mattis placerat. Suspendisse pulvinar, augue ac venenatis condimentum, 
                    sem libero volutpat nibh, nec pellentesque velit pede quis nunc.
                    </p>

                </div>
            </div>

        </div> <!-- end s-about__section--profile -->

        <div class="s-about__section">

            <div class="row">
                <div class="column">
                    <h3 data-aos="fade-up">Career</h3>
                </div>
            </div>

            <div class="row block-large-1-2 block-900-full work-positions">

                <div class="column" data-aos="fade-up">
                    <div class="position">
                        <div class="position__header">
                            <h6>
                                <span class="position__co">Google</span>
                                <span class="position__pos">Product Designer</span>
                            </h6>
                            <div class="position__timeframe">
                                June 2017 - Present
                            </div>
                        </div>

                        <p>
                        Pellentesque posuere. Etiam rhoncus. Praesent blandit laoreet nibh. 
                        Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, 
                        eu sollicitudin urna dolor sagittis lacus. 
                        </p>
                    </div>
                </div> <!-- end column -->
                <div class="column" data-aos="fade-up">
                    <div class="position">
                        <div class="position__header">
                            <h6>
                                <span class="position__co">Facebook</span>
                                <span class="position__pos">UX Director</span>
                            </h6>
                            <div class="position__timeframe">
                                August 2015 - June 2017
                            </div>
                        </div>

                        <p>
                        Aliquam erat volutpat. Phasellus volutpat, metus eget egestas mollis, 
                        lacus lacus blandit dui, id egestas quam mauris ut lacus. Pellentesque 
                        dapibus hendrerit tortor. 
                        </p>
                    </div>
                </div> <!-- end column -->
                <div class="column" data-aos="fade-up">
                    <div class="position">
                        <div class="position__header">
                            <h6>
                                <span class="position__co">Dropbox</span>
                                <span class="position__pos">Mobile App Designer</span>
                            </h6>
                            <div class="position__timeframe">
                                April 2014 - August 2015
                            </div>
                        </div>

                        <p>
                        In hac habitasse platea dictumst. Donec pede justo, fringilla vel, aliquet nec, 
                        vulputate eget, arcu. Fusce risus nisl, viverra et, tempor et, pretium in, sapien.
                        Phasellus volutpat, metus eget.
                        </p>
                    </div>
                </div> <!-- end column -->
                <div class="column" data-aos="fade-up">
                    <div class="position">
                        <div class="position__header">
                            <h6>
                                <span class="position__co">Microsoft</span>
                                <span class="position__pos">Product Designer</span>
                            </h6>
                            <div class="position__timeframe">
                                June 2012 - February 2014
                            </div>
                        </div>

                        <p>
                        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
                        Curabitur blandit mollis lacus. Curabitur vestibulum aliquam leo. 
                        Vivamus in erat ut urna cursus vestibulum.
                        </p>
                    </div>
                </div> <!-- end column -->

            </div> <!-- work positions -->

        </div> <!-- end s-about__section -->

    </section> <!-- end s-about -->

    <?php require('includes/photoswipe.php')?>

    <?php require('includes/scripts.php')?>

</body>
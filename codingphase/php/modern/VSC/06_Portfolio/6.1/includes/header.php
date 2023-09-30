    <?php 
        // header css depended on current page / location.
        $location = $_SERVER['REQUEST_URI'];
        // make header sticky offset scrolling if not home_page
        $stickyoffsetscrolling = ($location == "")? "":
                                    "sticky offset scrolling";
    ?>
    
    <!-- header
    ================================================== -->
    <!-- <header class="s-header sticky offset scrolling"> -->
    <header class="s-header <?php echo $stickyoffsetscrolling ?>">
        <div class="header-logo">
            <a href="index.html">
                <img src="images/logo.svg" alt="Homepage">
            </a>
        </div>

        <div class="header-content">
            <nav class="row header-nav-wrap">
                <ul class="header-nav">
                    <li><a class="smoothscroll" href="index.php" title="Intro">Home</a></li>
                    <li><a class="smoothscroll" href="about.php" title="About">About</a></li>
                    <li><a class="smoothscroll" href="services.php" title="Services">Services</a></li>
                    <li><a class="smoothscroll" href="portfolio.php" title="Works">Portfolio</a></li>
                    <li><a href="mailto:#0" title="Contact us">Contact Us</a></li>
                </ul>
            </nav> <!-- end header-nav-wrap -->

            <!-- <nav class="row header-nav-wrap">
                <ul class="header-nav">
                    <li><a class="smoothscroll" href="#hero" title="Intro">Home</a></li>
                    <li><a class="smoothscroll" href="#about" title="About">About</a></li>
                    <li><a class="smoothscroll" href="#services" title="Services">Services</a></li>
                    <li><a class="smoothscroll" href="#portfolio" title="Works">Portfolio</a></li>
                    <li><a href="mailto:#0" title="Contact us">Contact Us</a></li>
                </ul>
            </nav> end header-nav-wrap -->

            <a href="#0" class="btn btn--stroke btn--small">Download CV</a>

        </div> <!-- end header-content -->

        <a class="header-menu-toggle" href="#0"><span>Menu</span></a>

    </header> 
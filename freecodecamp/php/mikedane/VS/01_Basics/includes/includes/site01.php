<!DOCTYPE html>
<!-- php -S localhost:4000 -->
<!-- include html, php -->
<html>
    <head>
        <meta charset="UTF-8">
        <title>PHP Include Examples</title>
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400&display=swap" 
            rel="stylesheet">
        <style>
            * {
                box-sizing: border-box;
                padding: 0;
                margin: 0;
            }
            body {
                font-family: 'Lora', serif;
                font-size: 26px;
            }
            .container {
                width: 95%;
                height: 700px;
            }
            .field {
                padding: 15px;
                margin: 15px;
                background-color: gainsboro;
                border: 1px solid red;
            }
        </style>
    </head>
    <body>
        <div class="container field">

            <?php include "header.html" ?>

            <p style="color:green; margin-top: 10px; padding: 25px 50px; font-size:0.85em">Lorem ipsum dolor sit 
            amet, consectetur adipiscing elit. Pellentesque at urna interdum, 
            pellentesque augue id, auctor enim. Integer urna felis, mollis ut urna sed, ornare blandit dui. 
            Proin in nisl sit amet tellus porttitor efficitur. Mauris vel neque nulla. Mauris a laoreet sapien. 
            Morbi nec tortor ex. Praesent orci ante, posuere id iaculis quis, aliquet vel arcu. Sed pulvinar, 
            odio id rhoncus maximus, quam neque tincidunt mi, non tincidunt tortor tortor quis urna. Mauris 
            fringilla vel odio quis bibendum. Aliquam erat volutpat. Nullam blandit eget mi sed accumsan. Donec 
            porttitor arcu in risus lobortis egestas id eget ex. Ut eget eleifend tortor.</p>

            <?php include "footer.html" ?>
        </div>
    </body>
</html>
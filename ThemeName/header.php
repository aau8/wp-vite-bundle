<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?php echo bloginfo('name'); ?></title>
    <?php wp_head(); ?>

    <!-- <script type='text/javascript'>
        /* <![CDATA[ */
        var AJAX_URL = "<?php echo admin_url( "admin-ajax.php" ) ?>";
        /* ]]> */
    </script> -->

    <!-- MANIFEST FILES START -->
    <?= vite('main.js') ?>
    <!-- MANIFEST FILES END -->
</head>

<body>
<div class="wrap">
<header class="header">
    <!-- code... -->
</header>
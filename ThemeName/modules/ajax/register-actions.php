<?php

require_once __DIR__ . '/post.php';

add_action( 'wp_ajax_post', 'ajax_post' );
add_action( 'wp_ajax_nopriv_post', 'ajax_post' );
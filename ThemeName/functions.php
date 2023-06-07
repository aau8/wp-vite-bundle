<?php

/**
 * GLOBAL VARS
 */
define("SITE_URL", home_url('/'));
define("THEME_URL", 'http' . ((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off') ? 's' : '') . '://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI']);
define("THEME_DOMAIN", 'domain-name');
define("THEME_URI", get_template_directory_uri());
define("THEME_PATH", get_template_directory());
define("THEME_ASSETS", get_template_directory_uri() . '/dist/');
define("THEME_IMG_PATH", get_template_directory_uri() . '/dist/img/');


/**
 * HELPERS
 */
require_once __DIR__ . '/helpers/vite.php';


/**
 * AJAX
 */
require_once __DIR__ . '/modules/ajax/register-actions.php';


/**
 * EXTENSIONS
 */
require_once __DIR__ . '/extensions/index.php';
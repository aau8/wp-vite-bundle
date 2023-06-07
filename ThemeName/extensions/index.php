<?php

require_once __DIR__ . '/options_page.php';

/**
 * Добавить свои стили, скрипты в загрузчик wp
 */
// add_action('wp_enqueue_scripts', 'project_scripts');

// function project_scripts() {
//     wp_enqueue_style('main-style', get_stylesheet_directory_uri() . '/assets/style.css');
//     wp_enqueue_script('bundle', get_stylesheet_directory_uri() . '/assets/index.js', array(), null, true);
// };

add_action('after_setup_theme', function() {
    // Поддержка редактирования меню
    add_theme_support('menus');

    // Поддержка определения логотипа у сайта
    add_theme_support('custom-logo');

    // Варианты менюшек у сайта
    register_nav_menus([
        'menu-header' => 'Menu Header',
        'menu-footer' => 'Menu Footer',
    ]);
});

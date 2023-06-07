<?php
/**
 * Добавление виджета на странице "Консоль"
 */

add_action( 'wp_dashboard_setup', function() {
	wp_add_dashboard_widget(
        'manual_widget',
        'Инструкция по использованию админки и доступы',
        'manual_dashboard_widget'
    );
} );

function manual_dashboard_widget() {
	echo '<a href="https://docs.google.com/document" style="white-space: nowrap; text-overflow: ellipsis; overflow: hidden; display: block;">Ссылка на иструкцию по использованию админки</a>';
}
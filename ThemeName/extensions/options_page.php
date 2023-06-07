<?php
/**
 * Добавление страницы с общими настройками (ACF)
 */

add_action('acf/init', 'acf_op_init');
function acf_op_init() {
	if( function_exists('acf_add_options_page') ) {
		acf_add_options_page(array(
			'page_title' 	=> 'Общие настройки',
			'menu_title'	=> 'Общие настройки',
			'menu_slug' 	=> 'general-settings',
		));
	}
}
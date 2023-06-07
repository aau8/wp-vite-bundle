<?php
/**
 * Поиск поста с id указанным в url-параметре id.
 * В данном случае также используется проверка post_type. Для каждого из post_type используется отдельный шаблон
 */

function ajax_post() {
	$post_id = intval( $_GET['id'] );

    global $post;
    $post = get_post($post_id);
    $post_type = $post->post_type;

    if ($post_type === 'post') {
        get_template_part('ajax/templates/post');
    }

    wp_die();
}
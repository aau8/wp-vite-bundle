<?php
/**
 * Кастомное меню
 */
class Menu_Titul extends Walker_Nav_Menu {
    function start_el(&$output, $item, $depth=0, $args=[], $id=0) {
        $output .= "<li class='" .  implode(" ", $item->classes) . "'>";

        if ($item->url && $item->url != '#') {
            $output .= '<a class="gta" href="'.$item->url.'" data-anchor="'.$item->url.'">';
        }
        else {
            $output .= '<span>';
        }

        $output .= $item->title;

        if ($item->url && $item->url != '#') {
            $output .= '</a>';
        }
        else {
            $output .= '</span>';
        }
    }
};
<?php
/**
 * Получить название месяца по его индексу
 */
function get_month_name($index) {
    $month_names = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря',
    ];

    return $month_names[$index];
};
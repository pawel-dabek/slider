<?php

/**
 * Plugin Name:       Slider
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       slider
 *
 * @package CreateBlock
 */

if (! defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_slider_block_init()
{
	register_block_type(__DIR__ . '/build');
}
add_action('init', 'create_block_slider_block_init');

/**
 * Enqueue assets for the front-end.
 */
function load_slider_assets()
{
	if (!is_admin()) {
		wp_enqueue_style('swiper', plugins_url('assets/swiper.css', __FILE__));
		wp_enqueue_script('swiper', plugins_url('assets/swiper.js', __FILE__), array(), '1.0', true);
	}
}
add_action('enqueue_block_assets', 'load_slider_assets');

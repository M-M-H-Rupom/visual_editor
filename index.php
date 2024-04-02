<?php 
/**
 * Plugin Name: Tiny MCE
 * Author: Rupom
 * Desciption: Plugin description
 * Version: 1.0
 */

//  function callback_enqueue_scripts($screen){
//      if('post-new.php' == $screen || 'post.php' == $screen){
//         wp_enqueue_script( 'tm_js', plugin_dir_url( __FILE__ ).'/js/main.js',array('jquery'), time(), true );
//      }
//  }
//  add_action('admin_enqueue_scripts','callback_enqueue_scripts');

function admin_assets(){
    add_filter('mce_external_plugins', 'callback_external_plugins');
    add_filter('mce_buttons', 'callback_buttons');
}
 add_action('admin_init','admin_assets');
 function callback_external_plugins($plugins){
    $plugins['tmcd_plugin'] = plugin_dir_url( __FILE__ ).'/js/main.js';
    return $plugins;
 }
 function callback_buttons($button){
    $button[] = 'tmcd_button_one';
    $button[] = 'tmcd_button_two';
    $button[] = 'tmcd_menu_one';
    $button[] = 'tmcd_form_button';
    return $button;
 }

// create template file for custom post
function callback_single_filter($file){
    global $post;
    if('book' == $post->post_type){
        $filepath = plugin_dir_path( __FILE__ ).'/single.php';
        $file = $filepath;
    }
    return $file;
}
add_filter( 'single_template', 'callback_single_filter');
?>
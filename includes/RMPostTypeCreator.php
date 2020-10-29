<?php

namespace Inc;

/**
 * This class is used for creating all custom post types.
 */
class RMPostTypeCreator
{   
    /**
     * Bind the creation of custom post types with the specific hook.
     */
    public static function install()
    {
        add_action( 'init', [ __CLASS__, 'createPostTypes' ] );
    } // INSTALL POST TYPES
    
    /**
     * Create all post types.
     */
    public static function createPostTypes()
    {
        /**
         * Post Type: Radio Stations.
         */
         
        $labels = [
            'name' => 'Radio Stations',
            'singular_name' => 'Radio Station',
            'all_items' => 'Radio Stations',
            'featured_image' => 'Logo',
            'set_featured_image' => 'Set logo',
            'remove_featured_image' => 'Remove logo',
            'use_featured_image' => 'Use as logo',
        ];

        $args = [
            'label' => 'Radio Stations',
            'labels' => $labels,
            'description' => '',
            'public' => true,
            'publicly_queryable' => true,
            'show_ui' => true,
            'show_in_rest' => true,
            'rest_base' => '',
            'rest_controller_class' => 'WP_REST_Posts_Controller',
            'has_archive' => true,
            'show_in_menu' => 'rm_menu_dashboard',
            'show_in_nav_menus' => true,
            'delete_with_user' => false,
            'exclude_from_search' => false,
            'capability_type' => 'post',
            'map_meta_cap' => true,
            'hierarchical' => false,
            'rewrite' => [ 'slug' => 'radio_station', 'with_front' => true ],
            'query_var' => true,
            'supports' => [ 'title', 'thumbnail' ],
        ];

        register_post_type( 'radio_station', $args );

        /**
         * Post Type: Musicians.
         */

        $labels = [
            'name' => 'Musicians',
            'singular_name' => 'Musician',
            'all_items' => 'Musicians',
        ];

        $args = [
            'label' => 'Musicians',
            'labels' => $labels,
            'description' => '',
            'public' => true,
            'publicly_queryable' => true,
            'show_ui' => true,
            'show_in_rest' => true,
            'rest_base' => '',
            'rest_controller_class' => 'WP_REST_Posts_Controller',
            'has_archive' => true,
            'show_in_menu' => 'rm_menu_dashboard',
            'show_in_nav_menus' => true,
            'delete_with_user' => false,
            'exclude_from_search' => false,
            'capability_type' => 'post',
            'map_meta_cap' => true,
            'hierarchical' => false,
            'rewrite' => [ 'slug' => 'musician', 'with_front' => true ],
            'query_var' => true,
            'supports' => [ 'title', 'editor', 'thumbnail' ],
            'taxonomies' => [ 'genre' ],
        ];

        register_post_type( 'musician', $args );
    } // CREATE POST TYPES
    
    /**
     * Delete all post types.
     */
    public static function deletePostTypes()
    {
        unregister_post_type( 'radio_station' );
        unregister_post_type( 'musician' );
    } // DELETE POST TYPES
} // RM POST TYPE CREATOR

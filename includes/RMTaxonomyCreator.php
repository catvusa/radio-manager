<?php

namespace Inc;

/**
 * This class is used for creating all taxonomies.
 */
class RMTaxonomyCreator
{
    /**
     * Bind the creation of taxonomies with the specific hook.
     */
    public static function installTaxonomies()
    {
        add_action( 'init', [ __CLASS__, 'createTaxonomies' ] );
        add_action( 'parent_file', [ __CLASS__, 'highlightMenu' ] );
    } // INSTALL TAXONOMIES
    
    /**
     * Highlight the menu when a user is on the taxonomy default page.
     */
    public static function highlightMenu( $parent_file )
    {
        global $current_screen;
        
        if ( $current_screen->taxonomy == 'genre' )
        {
            $parent_file = 'rm_menu_dashboard';
        } // if
        
        return $parent_file;
    } // HIGHLIGHT MENU
    
    /**
     * Create all taxonomies.
     */
    public static function createTaxonomies()
    {
        /**
         * Taxonomy: Genres.
         */

        $labels = [
            'name' => 'Genres',
            'singular_name' => 'Genre',
        ];

        $args = [
            'label' => 'Genres',
            'labels' => $labels,
            'public' => true,
            'publicly_queryable' => true,
            'hierarchical' => true,
            'show_ui' => true,
            'show_in_menu' => true,
            'show_in_nav_menus' => true,
            'query_var' => true,
            'rewrite' => [ 'slug' => 'genre', 'with_front' => true, ],
            'show_admin_column' => false,
            'show_in_rest' => true,
            'rest_base' => 'genre',
            'rest_controller_class' => 'WP_REST_Terms_Controller',
            'show_in_quick_edit' => false,
        ];
        
        register_taxonomy( 'genre', [ 'musician' ], $args );
        
        /**
         * Insert default terms.
         */
         
        foreach ( array( 'Announcements', 'Classical', 'Folk', 'Jingles', 'Uncategorized' ) as $term)
        {
            wp_insert_term( $term, 'genre' );
        } // foreach
    } // CREATE TAXONOMIES
} // RM TAXONOMY CREATOR

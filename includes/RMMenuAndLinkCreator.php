<?php

namespace Inc;

/**
 * This class is used for creating all menu and submenu pages including links.
 */
class RMMenuAndLinkCreator
{
    /**
     * Bind the creation of menu and links with hooks.
     */
    public static function install()
    {
        $plugin_file = plugin_basename( dirname( __FILE__, 2 ) ) . '/radio-manager.php';
        
        add_action( 'admin_menu', [ __CLASS__, 'createMenu' ] );
        add_filter( "plugin_action_links_{$plugin_file}", [ __CLASS__, 'createLinks' ] );
    } // INSTALL
    
    /**
     * Create the plugin menu (visible in the left panel).
     */
    public static function createMenu()
    {
        add_menu_page(
            RM_PLUGIN_NAME, # Page title
            RM_PLUGIN_NAME, # Menu title
            RM_CAPABILITY, # Capability
            RM_MAIN_PAGE_SLUG, # Menu slug
            '', # Callback
            'dashicons-format-audio', # Icon URL
            '100', # Position
        );
        
        add_submenu_page(
            RM_MAIN_PAGE_SLUG, # Parent slug
            RM_MAIN_PAGE_TITLE, # Page title
            RM_MAIN_PAGE_TITLE, # Menu title
            RM_CAPABILITY, # Capability
            RM_MAIN_PAGE_SLUG, # Menu slug
            function() { return require_once( plugin_dir_path( dirname( __FILE__ ) ) . '/admin/dashboard.php' ); }, # Callback
            0, # Position
        );
        
        add_submenu_page(
            RM_MAIN_PAGE_SLUG, # Parent slug
            RM_GENRES_PAGE_TITLE, # Page title
            RM_GENRES_PAGE_TITLE, # Menu title
            RM_CAPABILITY, # Capability
            RM_GENRES_PAGE_SLUG, # Menu slug
            '', # Callback
            null, # Position
        );
        
        add_submenu_page(
            RM_MAIN_PAGE_SLUG, # Parent slug
            RM_HELP_PAGE_TITLE, # Page title
            RM_HELP_PAGE_TITLE, # Menu title
            RM_CAPABILITY, # Capability
            RM_HELP_PAGE_SLUG, # Menu slug
            function() { return require_once( plugin_dir_path( dirname( __FILE__ ) ) . '/admin/help.php' ); }, # Callback
            null, # Position
        );
    } // CREATE MENU
    
    /**
     * Create all links (visible in the "Installed Plugins" nearby this plugin).
     */
    public static function createLinks( $links )
    {
        # Before the 'Deactivate' link
        array_unshift($links, '<a href="admin.php?page=' . RM_MAIN_PAGE_SLUG . '">' . RM_MAIN_PAGE_TITLE . '</a>');
        
        # After the 'Deactivate' link
        array_push($links, '<a href="admin.php?page=' . RM_HELP_PAGE_SLUG . '">' . RM_HELP_PAGE_TITLE . '</a>'); 
        
        return $links;
    } // CREATE LINKS
} // RM MENU AND LINKS CREATOR

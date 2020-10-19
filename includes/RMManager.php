<?php

namespace Inc;

use Inc\RMPageCreator;

/**
 * This class is used for building the plugin.
 */
class RMManager
{
    /**
     * The main file of the plugin.
     */	
    private $plugin_file;

    /**
     * Initialize all attributes.
     */    
    public function __construct( string $plugin_file )
    {
        $this->plugin_file = $plugin_file;
    } // CONSTRUCTOR
    
    /**
     * Install all components of the plugin.
     */	
    public function install()
    {
        $this->installPagesAndLinks();
    } // INSTALL
    
    /**
     * Install all menu and submenu pages.
     */
    public function installPagesAndLinks()
    {
        $page_creator = new RMPageCreator();
        $main_page_title = 'Dashboard';
        $main_page_slug = 'rm_dashboard';
        $help_page_title = 'Help';
        $help_page_slug = 'rm_help';
        $capability = 'manage_options';
        
        $page_creator->addMenuPages(
            [
                [
                    'page_title' => 'Radio Manager',
                    'menu_title' => 'Radio Manager',
                    'capability' => $capability,
                    'menu_slug' => $main_page_slug,
                    'function' => '',
                    'icon_url' => 'dashicons-format-audio',
                    'position' => '100',
                ],
            ]
        );
        $page_creator->addSubmenuPages(
            [
                [
                    'parent_slug' => $main_page_slug,
                    'page_title' => $main_page_title,
                    'menu_title' => $main_page_title,
                    'capability' => $capability,
                    'menu_slug' => $main_page_slug,
                    'function' => function() { echo '<h1>Dashboard Page</h1>'; },
                    'position' => null,
                ],
                [
                    'parent_slug' => $main_page_slug,
                    'page_title' => 'Radio Stations',
                    'menu_title' => 'Radio Stations',
                    'capability' => $capability,
                    'menu_slug' => 'rm_radio_stations',
                    'function' => function() { echo '<h1>Radio Stations Page</h1>'; },
                    'position' => null,
                ],
                [
                    'parent_slug' => $main_page_slug,
                    'page_title' => 'Musicians',
                    'menu_title' => 'Musicians',
                    'capability' => $capability,
                    'menu_slug' => 'rm_musicians',
                    'function' => function() { echo '<h1>Musicians Page</h1>'; },
                    'position' => null,
                ],
                [
                    'parent_slug' => $main_page_slug,
                    'page_title' => 'Genres',
                    'menu_title' => 'Genres',
                    'capability' => $capability,
                    'menu_slug' => 'rm_genres',
                    'function' => function() { echo '<h1>Genres Page</h1>'; },
                    'position' => null,
                ],
                [
                    'parent_slug' => $main_page_slug,
                    'page_title' => $help_page_title,
                    'menu_title' => $help_page_title,
                    'capability' => $capability,
                    'menu_slug' => $help_page_slug,
                    'function' => function() { echo '<h1>Help Page</h1>'; },
                    'position' => null,
                ],
            ]
        );
        $page_creator->addLinks(
            [
                [
                    'order' => 'before',
                    'link' => '<a href="admin.php?page=' . $main_page_slug . '">' . $main_page_title . '</a>',
                ],
                [
                    'order' => 'after',
                    'link' => '<a href="admin.php?page=' . $help_page_slug . '">' . $help_page_title . '</a>',
                ],
            ]
        );
        $page_creator->install( $this->plugin_file );
    } // INSTALL PAGES AND LINKS
} // RM MANAGER

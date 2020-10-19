<?php

namespace Inc;

use Inc\RMPageCreator;

/**
 * This class is used for building the plugin.
 */
class RMManager
{
    /**
     * Install all components of the plugin.
     */	
    public function install()
    {
        $this->installPages();
    } // MANAGE
    
    /**
     * Install all menu or submenu pages.
     */
    public function installPages()
    {
        $page_creator = new RMPageCreator();
        $page_creator->addMenuPages(
            [
                [
                    'page_title' => 'Radio Manager',
                    'menu_title' => 'Radio Manager',
                    'capability' => 'manage_options',
                    'menu_slug' => 'rm_dashboard',
                    'function' => '',
                    'icon_url' => 'dashicons-format-audio',
                    'position' => '100',
                ],
            ]
        );
        $page_creator->addSubmenuPages(
            [
                [
                    'parent_slug' => 'rm_dashboard',
                    'page_title' => 'Dashboard',
                    'menu_title' => 'Dashboard',
                    'capability' => 'manage_options',
                    'menu_slug' => 'rm_dashboard',
                    'function' => function() { echo '<h1>Dashboard Page</h1>'; },
                    'position' => null,
                ],
                [
                    'parent_slug' => 'rm_dashboard',
                    'page_title' => 'Radio Stations',
                    'menu_title' => 'Radio Stations',
                    'capability' => 'manage_options',
                    'menu_slug' => 'rm_radio_stations',
                    'function' => function() { echo '<h1>Radio Stations Page</h1>'; },
                    'position' => null,
                ],
                [
                    'parent_slug' => 'rm_dashboard',
                    'page_title' => 'Musicians',
                    'menu_title' => 'Musicians',
                    'capability' => 'manage_options',
                    'menu_slug' => 'rm_musicians',
                    'function' => function() { echo '<h1>Musicians Page</h1>'; },
                    'position' => null,
                ],
                [
                    'parent_slug' => 'rm_dashboard',
                    'page_title' => 'Genres',
                    'menu_title' => 'Genres',
                    'capability' => 'manage_options',
                    'menu_slug' => 'rm_genres',
                    'function' => function() { echo '<h1>Genres Page</h1>'; },
                    'position' => null,
                ],
                [
                    'parent_slug' => 'rm_dashboard',
                    'page_title' => 'Help',
                    'menu_title' => 'Help',
                    'capability' => 'manage_options',
                    'menu_slug' => 'rm_help',
                    'function' => function() { echo '<h1>Help Page</h1>'; },
                    'position' => null,
                ],
            ]
        );
        $page_creator->install();
    } // INSTALL PAGES
} // RM MANAGER

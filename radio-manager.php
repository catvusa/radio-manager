<?php

/**
 * Plugin Name:       Radio Manager
 * Plugin URI:        https://catvusa.com/
 * Description:       A plugin for managing your own custom web radios.
 * Version:           0.0.2
 * Requires at least: 5.5
 * Requires PHP:      7.3
 * Author:            Karel Vrabec
 * Author URI:        https://github.com/karelvrabeckv
 */

# Prevent a public user from direct access
defined( 'ABSPATH' ) or die( 'Forbidden' );

# Load the composer autoloader
if ( file_exists( dirname( __FILE__ ) . '/vendor/autoload.php' ) )
{
    require_once dirname( __FILE__ ) . '/vendor/autoload.php';
} // if

/**
 * Activate the plugin.
 */
function rm_activate_plugin()
{
    if ( class_exists( 'Inc\\RMActivator' ) )
    {
        Inc\RMActivator::activate();
    } // if
} // RM ACTIVATE PLUGIN
register_activation_hook( __FILE__, 'rm_activate_plugin' );

/**
 * Deactivate the plugin.
 */
function rm_deactivate_plugin()
{
    if ( class_exists( 'Inc\\RMDeactivator' ) )
    {
        Inc\RMDeactivator::deactivate();
    } // if
} // RM DEACTIVATE PLUGIN
register_deactivation_hook( __FILE__, 'rm_deactivate_plugin' );

# Install all components of the plugin
if ( class_exists( 'Inc\\RMManager' ) )
{
    ( new Inc\RMManager() )->install();
} // if

# Constants
define( 'RM_PLUGIN_NAME', 'Radio Manager' );

define( 'RM_MAIN_PAGE_TITLE', 'Dashboard' );
define( 'RM_MAIN_PAGE_SLUG', 'rm_menu_dashboard' );

define( 'RM_GENRES_PAGE_TITLE', 'Genres' );
define( 'RM_GENRES_PAGE_SLUG', 'edit-tags.php?taxonomy=genre' );

define( 'RM_HELP_PAGE_TITLE', 'Help' );
define( 'RM_HELP_PAGE_SLUG', 'rm_menu_help' );

define( 'RM_CAPABILITY', 'manage_options' );

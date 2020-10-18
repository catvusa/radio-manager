<?php

/**
 * Plugin Name:       Radio Manager
 * Plugin URI:        https://catvusa.com/
 * Description:       A plugin for managing your own custom web radios.
 * Version:           0.0.1
 * Requires at least: 5.5
 * Requires PHP:      7.3
 * Author:            Karel Vrabec
 * Author URI:        https://github.com/karelvrabeckv
 */

# Prevent a public user from direct access
defined( 'ABSPATH' ) or die( 'Forbidden' );

# Load the composer autoloader
if ( file_exists( dirname( __FILE__ ) . '/vendor/autoload.php') )
{
    require_once dirname( __FILE__ ) . '/vendor/autoload.php';
} // if

/**
 * Activate the plugin.
 */
function rm_activate_plugin()
{
    Inc\RMActivator::activate();
} // RM ACTIVATE PLUGIN
register_activation_hook( __FILE__, 'rm_activate_plugin' );

/**
 * Deactivate the plugin.
 */
function rm_deactivate_plugin()
{
    Inc\RMDeactivator::deactivate();
} // RM DEACTIVATE PLUGIN
register_deactivation_hook( __FILE__, 'rm_deactivate_plugin' );

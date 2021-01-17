<?php

/**
 * Plugin Name:       Radio Manager
 * Plugin URI:        https://github.com/catvusa/radio-manager
 * Description:       A WordPress plugin for managing your own custom web radios.
 * Version:           1.0.0
 * Requires at least: 5.5
 * Requires PHP:      7.3
 * Author:            Karel Vrabec
 * Author URI:        https://github.com/karelvrabeckv
 */

// Prevent a public user from direct access
defined( "ABSPATH" ) or die( "Forbidden" );

// Load the autoloader
if ( file_exists( __DIR__ . "/vendor/autoload.php" ) )
{
  require_once __DIR__ . "/vendor/autoload.php";
} // if

/**
 * Register all frontend styles and scripts.
 */
function rmRegisterFrontendStylesAndScripts()
{
  // Register frontend styles and scripts
  wp_register_style( "rm-frontend-styles", plugins_url( "/public/dist/rm-styles.min.css", __FILE__ ), [], rand(1, 9999) );
  wp_register_script( "rm-frontend-scripts", plugins_url( "/public/dist/rm-scripts.min.js", __FILE__ ), [], rand(1, 9999) );

  // Load frontend styles and scripts
  wp_enqueue_style( "rm-frontend-styles" );
  wp_enqueue_script( "rm-frontend-scripts", "", [], false, true );
} // RM REGISTER FRONTEND STYLES AND SCRIPTS
add_action( "wp_enqueue_scripts", "rmRegisterFrontendStylesAndScripts" );

/**
 * Register all backend styles and scripts.
 */
function rmRegisterBackendStylesAndScripts()
{
  // Register backend scripts
  wp_register_script( "rm-backend-scripts", plugins_url( "/admin/js/rmCopy.js", __FILE__ ) );
  
  // Load backend scripts
  wp_enqueue_script( "rm-backend-scripts" );
} // RM REGISTER BACKEND STYLES AND SCRIPTS
add_action( "admin_enqueue_scripts", "rmRegisterBackendStylesAndScripts" );

// Constants
define( "RM_PLUGIN", __FILE__ );

define( "RM_PLUGIN_NAME", "Radio Manager" );
define( "RM_MENU_SLUG", "rm_menu" );

define( "RM_RADIO_STATION_POST_TYPE", "rm_radio_station" );
define( "RM_MUSICIAN_POST_TYPE", "rm_musician" );

define( "RM_GENRE_TAXONOMY", "rm_genre" );

define( "RM_GENRES_PAGE_TITLE", "Genres" );
define( "RM_GENRES_PAGE_SLUG", "edit-tags.php?taxonomy=" . RM_GENRE_TAXONOMY );

define( "RM_HELP_PAGE_TITLE", "Help" );
define( "RM_HELP_PAGE_SLUG", "rm_help" );

define( "RM_ADMIN_CAPABILITY", "manage_options" );
define( "RM_EDITOR_CAPABILITY", "edit_posts" );

// Install the plugin
if ( class_exists( "Inc\\RMManager" ) )
{
  $radio_manager = new Inc\RMManager();
  $radio_manager->install();
} // if

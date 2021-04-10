<?php

/**
 * Plugin Name:       Radio Manager
 * Description:       A WordPress plugin for managing your own custom web radios.
 * Version:           1.2.0
 * Requires at least: 5.5
 * Requires PHP:      7.3
 * Author:            Karel Vrabec
 * Author URI:        https://github.com/karelvrabeckv
 * License:           MIT
 */

/*

Copyright (c) 2021 Faculty of Information Technology, Czech Technical University in Prague

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

// Prevent a public user from direct access
defined( "ABSPATH" ) or die( "Forbidden" );

// Load the autoloader
if ( file_exists( __DIR__ . "/vendor/autoload.php" ) )
{
  require_once __DIR__ . "/vendor/autoload.php";
} // if

/**
 * Load all frontend styles and scripts.
 */
function rmLoadFrontendStylesAndScripts()
{
  wp_enqueue_style( "rm-frontend-styles", plugins_url( "/public/dist/rm-styles.min.css", __FILE__ ) );
  wp_enqueue_script( "rm-frontend-scripts", plugins_url( "/public/dist/rm-scripts.min.js", __FILE__ ) );
} // RM LOAD FRONTEND STYLES AND SCRIPTS
add_action( "wp_enqueue_scripts", "rmLoadFrontendStylesAndScripts" );

/**
 * Load all backend styles and scripts.
 */
function rmLoadBackendStylesAndScripts()
{
  wp_enqueue_script( "rm-backend-scripts", plugins_url( "/admin/js/rmCopy.js", __FILE__ ) );
} // RM LOAD BACKEND STYLES AND SCRIPTS
add_action( "admin_enqueue_scripts", "rmLoadBackendStylesAndScripts" );

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

define( "RM_USER_GUIDE", "/user-guide.pdf" );

define( "RM_ADMIN_CAPABILITY", "manage_options" );
define( "RM_EDITOR_CAPABILITY", "edit_posts" );

// Install the plugin
if ( class_exists( "Inc\\RMManager" ) )
{
  $radio_manager = new Inc\RMManager();
  $radio_manager->install();
} // if

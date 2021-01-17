<?php

namespace Inc;

/**
 * Represent a singleton creator that
 * creates the main menu of the plugin,
 * the items of this menu including
 * their content and the links (visible
 * in the „Installed Plugins“).
 */
class RMMenuAndLinkCreator extends RMSubsystem
{
  /**
   * Bind the installation of the menu
   * and links with the specific hooks.
   */
  public function install()
  {
    add_action( "admin_menu", [ $this, "createMenu" ] );

    add_filter( "plugin_action_links_" . plugin_basename( RM_PLUGIN ), [ $this, "createLinks" ] );
  } // INSTALL

  /**
   * Remove the main menu of the plugin
   * including the respective items.
   * @see remove_menu_page() for removing custom menu pages.
   * @see remove_submenu_page() for removing custom submenu pages.
   */
  public function uninstall()
  {
    remove_menu_page( RM_MENU_SLUG );

    remove_submenu_page( RM_MENU_SLUG, RM_GENRES_PAGE_SLUG );
    remove_submenu_page( RM_MENU_SLUG, RM_HELP_PAGE_SLUG );
  } // UNINSTALL

  /**
   * Create the main menu of the plugin
   * (visible in the left navigation menu).
   * @see add_menu_page() for adding custom menu pages.
   * @see add_submenu_page() for adding custom submenu pages.
   */
  public function createMenu()
  {
    /**
     * Menu Page: Radio Manager.
     */
    add_menu_page(
      RM_PLUGIN_NAME, // Page title
      RM_PLUGIN_NAME, // Menu title
      RM_EDITOR_CAPABILITY, // Capability
      RM_MENU_SLUG, // Menu slug
      "", // Function
      "dashicons-format-audio", // Icon URL
      "100", // Position
    );

    /**
     * Submenu Page: Genres.
     */
    add_submenu_page(
      RM_MENU_SLUG, // Parent slug
      RM_GENRES_PAGE_TITLE, // Page title
      RM_GENRES_PAGE_TITLE, // Menu title
      RM_ADMIN_CAPABILITY, // Capability
      RM_GENRES_PAGE_SLUG, // Menu slug
    );

    /**
     * Submenu Page: Help.
     */
    add_submenu_page(
      RM_MENU_SLUG, // Parent slug
      RM_HELP_PAGE_TITLE, // Page title
      RM_HELP_PAGE_TITLE, // Menu title
      RM_EDITOR_CAPABILITY, // Capability
      RM_HELP_PAGE_SLUG, // Menu slug
      [ $this, "createHelpSubmenuPageHTML" ], // Function
    );
  } // CREATE MENU
  
  /**
   * Create the links (visible in
   * the „Installed Plugins“).
   * @param string[] $actions – An array of plugin action links.
   * @return string[] $actions – An array of plugin action links.
   */
  public function createLinks( $actions )
  {
    // Insert the „Help“ link after the „Deactivate“ link
    array_push( $actions, '<a href="admin.php?page=' . RM_HELP_PAGE_SLUG . '">' . RM_HELP_PAGE_TITLE . '</a>' );

    return $actions;
  } // CREATE LINKS
  
  /**
   * Create the content of the „Help“
   * submenu page.
   */
  public function createHelpSubmenuPageHTML()
  {
    ?>

    <div class="wrap">
      <h1>Help</h1>
      <br />
      <span>In the future, there will be the user guide.</span>
    </div>

    <?php
  } // CREATE HELP SUBMENU PAGE HTML
} // RM MENU AND LINK CREATOR

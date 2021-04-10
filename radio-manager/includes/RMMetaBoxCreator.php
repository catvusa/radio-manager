<?php

namespace Inc;

/**
 * Represent a singleton creator that
 * creates the shortcode meta box.
 */
class RMMetaBoxCreator extends RMSubsystem
{
  /**
   * Hold a singleton instance.
   * @static
   */
  private static $instance = null;
    
  /**
   * Create a singleton (but it is
   * private in order to prevent
   * initiation from the outside).
   */
  private function __construct()
  {
  } // CONSTRUCTOR
  
  /**
   * Restrict cloning.
   */
  private function __clone()
  {
  } // CLONE

  /**
   * Get the singleton instance.
   * @static
   * @return object - The instance of this class.
   */
  public static function getInstance()
  {
    if ( self::$instance == null )
    {
      // Create only from within the class
      self::$instance = new self();
    } // if

    return self::$instance;
  } // GET INSTANCE
  
  /**
   * Bind the installation of the shortcode
   * meta box with the specific hook.
   */
  public function install()
  {
    add_action( "add_meta_boxes", [ $this, "createMetaBoxes" ] );
  } // INSTALL

  /**
   * Remove the shortcode meta box.
   * @see remove_meta_box() for removing custom meta boxes.
   */
  public function uninstall()
  {
    remove_meta_box( "rm_shortcode_meta_box", RM_RADIO_STATION_POST_TYPE, "side" );
  } // UNINSTALL

  /**
   * Create the shortcode meta box.
   * @see add_meta_box() for adding custom meta boxes.
   */
  public function createMetaBoxes()
  {
    /**
     * Meta Box: Shortcode.
     */
    add_meta_box(
      "rm_shortcode_meta_box", // ID
      "Shortcode", // Title
      [ $this, "createShortcodeMetaBoxHTML" ], // Callback
      RM_RADIO_STATION_POST_TYPE, // Screen
      "side", // Context
      "high", // Priority
    );
  } // CREATE META BOXES

  /**
   * Create the content of the shortcode
   * meta box.
   * @param WP_Post $post - The current post.
   */
  public function createShortcodeMetaBoxHTML( $post )
  {
    ?>

    Copy and paste the following shortcode into a WordPress post or page to embed this radio station:
    <br /><br />
    <pre id="rm-shortcode">[<?= RM_RADIO_STATION_POST_TYPE; ?> id="<?= $post->ID; ?>"]</pre>
    <input type="button" value="Copy" onClick="rmCopy( 'rm-shortcode' );">

    <?php
  } // CREATE SHORTCODE META BOX HTML
} // RM META BOX CREATOR

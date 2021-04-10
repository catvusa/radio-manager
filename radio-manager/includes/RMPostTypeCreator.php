<?php

namespace Inc;

/**
 * Represent a singleton creator that
 * creates the radio station and
 * the musician post types.
 */
class RMPostTypeCreator extends RMSubsystem
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
   * Bind the installation of the radio
   * station and the musician post types
   * with the specific hook.
   */
  public function install()
  {
    add_action( "init", [ $this, "createPostTypes" ] );
  } // INSTALL

  /**
   * Remove all the post types.
   * @see unregister_post_type() for unregistering custom post types.
   */
  public function uninstall()
  {
    unregister_post_type( RM_RADIO_STATION_POST_TYPE );
    unregister_post_type( RM_MUSICIAN_POST_TYPE );
  } // UNINSTALL

  /**
   * Create the radio station and
   * the musician post types.
   * @see register_post_type() for registering custom post types.
   */
  public function createPostTypes()
  {
    // Only administrators can see all the radio stations
    if ( current_user_can( RM_ADMIN_CAPABILITY ) )
    {
      /**
       * Post Type: Radio Station.
       */

      $labels = [
        "name"                     => "Radio Stations",
        "singular_name"            => "Radio Station",
        "add_new_item"             => "Add New Radio Station",
        "edit_item"                => "Edit Radio Station",
        "new_item"                 => "New Radio Station",
        "view_item"                => "View Radio Station",
        "view_items"               => "View Radio Stations",
        "search_items"             => "Search Radio Stations",
        "not_found"                => "No radio stations found.",
        "not_found_in_trash"       => "No radio stations found in Trash.",
        "all_items"                => "Radio Stations",
        "archives"                 => "Radio Station Archives",
        "attributes"               => "Radio Station Attributes",
        "insert_into_item"         => "Insert into radio station",
        "uploaded_to_this_item"    => "Uploaded to this radio station",
        "featured_image"           => "Logo",
        "set_featured_image"       => "Set logo",
        "remove_featured_image"    => "Remove logo",
        "use_featured_image"       => "Use as logo",
        "filter_items_list"        => "Filter radio stations list",
        "items_list_navigation"    => "Radio stations list navigation",
        "items_list"               => "Radio stations list",
        "item_published"           => "Radio station published.",
        "item_published_privately" => "Radio station published privately.",
        "item_reverted_to_draft"   => "Radio station reverted to draft.",
        "item_scheduled"           => "Radio station scheduled.",
        "item_updated"             => "Radio station updated.",
      ];

      $args = [
        "labels"                   => $labels,
        "public"                   => true,
        "show_in_rest"             => true,
        "show_in_menu"             => RM_MENU_SLUG,
        "delete_with_user"         => false,
        "supports"                 => [ "title", "thumbnail" ],
      ];
            
      register_post_type( RM_RADIO_STATION_POST_TYPE, $args );
    } // if

    /**
     * Post Type: Musician.
     */

    $labels = [
      "name"                     => "Musicians",
      "singular_name"            => "Musician",
      "add_new_item"             => "Add New Musician",
      "edit_item"                => "Edit Musician",
      "new_item"                 => "New Musician",
      "view_item"                => "View Musician",
      "view_items"               => "View Musicians",
      "search_items"             => "Search Musicians",
      "not_found"                => "No musicians found.",
      "not_found_in_trash"       => "No musicians found in Trash.",
      "all_items"                => "Musicians",
      "archives"                 => "Musician Archives",
      "attributes"               => "Musician Attributes",
      "insert_into_item"         => "Insert into musician",
      "uploaded_to_this_item"    => "Uploaded to this musician",
      "filter_items_list"        => "Filter musicians list",
      "items_list_navigation"    => "Musicians list navigation",
      "items_list"               => "Musicians list",
      "item_published"           => "Musician published.",
      "item_published_privately" => "Musician published privately.",
      "item_reverted_to_draft"   => "Musician reverted to draft.",
      "item_scheduled"           => "Musician scheduled.",
      "item_updated"             => "Musician updated.",
    ];

    $args = [
      "labels"                   => $labels,
      "public"                   => true,
      "exclude_from_search"      => false,
      "show_in_rest"             => true,
      "show_in_menu"             => RM_MENU_SLUG,
      "delete_with_user"         => false,
      "supports"                 => [ "title", "editor", "thumbnail" ],
      "taxonomies"               => [ RM_GENRE_TAXONOMY ],
      "has_archive"              => true,
      "rewrite"                  => [ "slug" => "musician" ],
    ];

    register_post_type( RM_MUSICIAN_POST_TYPE, $args );
  } // CREATE POST TYPES
} // RM POST TYPE CREATOR

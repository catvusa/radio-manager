<?php

namespace Inc;

/**
 * Represent a singleton creator that
 * creates the genre taxonomy.
 */
class RMTaxonomyCreator extends RMSubsystem
{
  /**
   * Bind the installation of the genre
   * taxonomy with the specific hooks.
   */
  public function install()
  {
    add_action( "init", [ $this, "createTaxonomies" ] );
    add_action( "parent_file", [ $this, "highlightMenu" ] );
  } // INSTALL

  /**
   * Remove the genre taxonomy.
   * @see unregister_taxonomy() for unregistering custom taxonomies.
   */
  public function uninstall()
  {
    unregister_taxonomy( RM_GENRE_TAXONOMY );
  } // UNINSTALL

  /**
   * Create the genre taxonomy for the musician post type.
   * @see register_taxonomy() for registering custom taxonomies.
   */
  public function createTaxonomies()
  {
    /**
     * Taxonomy: Genre.
     */

    $labels = [
      "name"              => "Genres",
      "singular_name"     => "Genre",
      "search_items"      => "Search Genres",
      "all_items"         => "All Genres",
      "parent_item"       => "Parent Genre",
      "parent_item_colon" => "Parent Genre:",
      "edit_item"         => "Edit Genre",
      "view_item"         => "View Genre",
      "update_item"       => "Update Genre",
      "add_new_item"      => "Add New Genre",
      "new_item_name"     => "New Genre Name",
      "not_found"         => "No genres found.",
      "no_terms"          => "No genres",
    ];
    
    $args = [
      "labels"            => $labels,
      "hierarchical"      => true,
      "show_in_rest"      => true,
    ];
 
    register_taxonomy( RM_GENRE_TAXONOMY, [ RM_MUSICIAN_POST_TYPE ], $args );
  } // CREATE TAXONOMIES

  /**
   * Highlight the main menu of the plugin
   * when the user is on the „Genres“ page.
   * @param string $parent_file – The parent file.
   * @return string $parent_file – The parent file.
   */
  public function highlightMenu( $parent_file )
  {
    $screen = get_current_screen();
        
    if ( $screen->taxonomy == RM_GENRE_TAXONOMY )
    {
      $parent_file = RM_MENU_SLUG;
    } // if
        
    return $parent_file;
  } // HIGHLIGHT MENU
} // RM TAXONOMY CREATOR

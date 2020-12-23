<?php

namespace Inc;

/**
 * This class is used for building the plugin.
 */
class RMManager
{
  private $menu_and_link_creator;
  private $post_type_creator;
  private $taxonomy_creator;
  private $repeater_field_creator;
  private $meta_box_creator;
  private $shortcode_creator;

  public function __construct()
  {
    $this->menu_and_link_creator = new RMMenuAndLinkCreator();
    $this->post_type_creator = new RMPostTypeCreator();
    $this->taxonomy_creator = new RMTaxonomyCreator();
    $this->repeater_field_creator = new RMRepeaterFieldCreator();
    $this->meta_box_creator = new RMMetaBoxCreator();
    $this->shortcode_creator = new RMShortcodeCreator();
  }

  /**
   * Register activation and deactivation hooks.
   * main_plugin_file – Full path of the main plugin file
   */
  public function registerHooks( $main_plugin_file )
  {
    register_activation_hook( $main_plugin_file, [ __CLASS__, 'activate' ] );
    register_deactivation_hook( $main_plugin_file, [ __CLASS__, 'deactivate' ] );
  } // REGISTER HOOKS

  /**
   * Create all post types after the activation.
   */
  public function activate()
  {   
    # Create all post types
    RMPostTypeCreator::createPostTypes();
    
    # Refresh all permalinks
    flush_rewrite_rules();
  } // ACTIVATE

  /**
   * Delete all post types after the deactivation.
   */
  public function deactivate()
  {
    # Delete all post types
    RMPostTypeCreator::deletePostTypes();
        
    # Refresh all permalinks
    flush_rewrite_rules();
  } // DEACTIVATE

  /**
    * Install all components of the plugin.
    */ 
  public function install()
  {
    $this->menu_and_link_creator->install();
    $this->post_type_creator->install();
    $this->taxonomy_creator->install();
    $this->repeater_field_creator->install();
    $this->meta_box_creator->install();
    $this->shortcode_creator->install();
  } // INSTALL
} // RM MANAGER

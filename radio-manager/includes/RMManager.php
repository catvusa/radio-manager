<?php

namespace Inc;

/**
 * This class is used for building the plugin.
 */
class RMManager
{
  /**
   * Register activation, deactivation and uninstall hooks.
   */
  public function registerHooks()
  {
    register_activation_hook( __FILE__, [ __CLASS__, 'activate' ] );
    register_deactivation_hook( __FILE__, [ __CLASS__, 'deactivate' ] );
  } // REGISTER HOOKS
	
  /**
   * Do this after the activation of the plugin.
   */
  public static function activate()
  {
    # Create all post types
    RMPostTypeCreator::createPostTypes();
    
    # Refresh all permalinks
    flush_rewrite_rules();
  } // ACTIVATE

  /**
   * Do this after the deactivation of the plugin.
   */
  public static function deactivate()
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
    RMMenuAndLinkCreator::install();
    RMPostTypeCreator::install();
    RMTaxonomyCreator::install();
    RMRepeaterFieldCreator::install();
    RMMetaBoxCreator::install();
    RMShortcodeCreator::install();
  } // INSTALL
} // RM MANAGER

<?php

namespace Inc;

/**
 * Represent a facade manager that manages
 * all the subsystems of the plugin.
 */
class RMManager
{
  /**
   * The array of subsystems.
   * @var array 
   */
  private $subsystems;

  /**
   * Create the facade manager.
   */
  public function __construct()
  {
    $this->subsystems =
    [
      RMACFFieldCreator::getInstance(),
      RMMenuAndLinkCreator::getInstance(),
      RMMetaBoxCreator::getInstance(),
      RMPostTypeCreator::getInstance(),
      RMShortcodeCreator::getInstance(),
      RMTaxonomyCreator::getInstance(),
    ];
  } // CONSTRUCTOR

  /**
   * Do this after the activation
   * of the plugin.
   */
  public function activate()
  {
    // Create all the post types
    $RMPostTypeCreator = RMPostTypeCreator::getInstance();
    $RMPostTypeCreator->createPostTypes();
    
    // Refresh all permalinks
    flush_rewrite_rules();
  } // ACTIVATE

  /**
   * Do this after the deactivation
   * of the plugin.
   */
  public function deactivate()
  {
    // Remove all the subsystems
    $this->uninstall();
        
    // Refresh all permalinks
    flush_rewrite_rules();
  } // DEACTIVATE

  /**
   * Install all the subsystems
   * of the plugin (including
   * the de/activation hooks).
   * @see register_activation_hook() for registering custom activation hook.
   * @see register_deactivation_hook() for registering custom deactivation hook.
   */
  public function install()
  {
    // Register de/activation hooks
    register_activation_hook( RM_PLUGIN, [ $this, "activate" ] );
    register_deactivation_hook( RM_PLUGIN, [ $this, "deactivate" ] );
    
    // Install the subsystems
    foreach ( $this->subsystems as $subsystem )
    {
      $subsystem->install();
    } // foreach
  } // INSTALL

  /**
   * Uninstall all the subsystems
   * of the plugin.
   */ 
  public function uninstall()
  {
    // Uninstall the subsystems
    foreach ( $this->subsystems as $subsystem )
    {
      $subsystem->uninstall();
    } // foreach
  } // UNINSTALL
} // RM MANAGER

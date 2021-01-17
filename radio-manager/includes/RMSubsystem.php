<?php

namespace Inc;

/**
 * Represent a subsystem that is
 * responsible for creating 
 * the certain part of the plugin.
 * @abstract
 */
abstract class RMSubsystem
{
  /**
   * Hold the singletons instances.
   * @static
   */
  private static $singletons = [];
  
  /**
   * Create the singleton (but it is
   * private in order to prevent
   * initiation from the outside).
   */
  private function __construct()
  {
  } // CONSTRUCTOR
 
  /**
   * Get the singleton instance.
   * @static
   * @return object – The instance of the singleton.
   */
  public static function getInstance()
  {
    $class = get_called_class();
    
    if ( !array_key_exists( $class, self::$singletons ) )
    {
      // Create only from within the class
      self::$singletons[ $class ] = new $class();
    } // if

    return self::$singletons[ $class ];
  } // GET INSTANCE

  /**
   * Install the subsystem.
   * @abstract
   */
  abstract public function install();

  /**
   * Uninstall the subsystem.
   * @abstract
   */
  abstract public function uninstall();
} // RM SUBSYSTEM

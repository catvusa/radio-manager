<?php

namespace Inc;

/**
 * Represent a subsystem that
 * is responsible for a certain
 * part of the plugin.
 * @abstract
 */
abstract class RMSubsystem
{   
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

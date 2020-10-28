<?php

namespace Inc;

/**
 * This class is used for an activation of the plugin.
 */
class RMActivator
{
    public static function activate()
    {   
        # Create all post types
        RMPostTypeCreator::createPostTypes();
    
        # Refresh all permalinks
        flush_rewrite_rules();
    } // ACTIVATE
} // RM ACTIVATOR

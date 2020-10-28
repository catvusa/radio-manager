<?php

namespace Inc;

/**
 * This class is used for a deactivation of the plugin.
 */
class RMDeactivator
{
    public static function deactivate()
    {
        # Delete all post types
        RMPostTypeCreator::deletePostTypes();
        
        # Refresh all permalinks
        flush_rewrite_rules();
    } // DEACTIVATE
} // RM DEACTIVATOR

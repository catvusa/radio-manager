<?php

namespace Inc;

use Inc\RMPageCreator;
use Inc\RMPostTypeCreator;
use Inc\RMTaxonomyCreator;

/**
 * This class is used for building the plugin.
 */
class RMManager
{
    /**
     * Install all components of the plugin.
     */ 
    public function install()
    {
        RMMenuAndLinkCreator::installMenuAndLinks();
        RMPostTypeCreator::installPostTypes();
        RMTaxonomyCreator::installTaxonomies();
        RMRepeaterFieldCreator::installRepeaterFields();
    } // INSTALL
} // RM MANAGER

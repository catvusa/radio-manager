<?php

namespace Inc;

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
        RMMetaBoxCreator::installMetaBoxes();
        RMShortcodeCreator::installShortcodes();
    } // INSTALL
} // RM MANAGER

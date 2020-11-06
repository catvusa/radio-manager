<?php

namespace Inc;

/**
 * This class is used for building the plugin.
 */
class RMManager
{
	/** @var string */
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

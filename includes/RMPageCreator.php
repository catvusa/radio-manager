<?php

namespace Inc;

/**
 * This class is used for creating all menu and submenu pages including links.
 */
class RMPageCreator
{
    private $menu_pages;
    private $submenu_pages;
    private $links;
    
    /**
     * Initialize all attributes.
     */
    public function __construct()
    {
        $menu_pages = [];
        $submenu_pages = [];
        $links = [];
    } // CONSTRUCTOR
    
    /**
     * Add menu pages to create.
     */
    public function addMenuPages( array $pages )
    {
        $this->menu_pages = $pages;
    } // ADD MENU PAGES
    
    /**
     * Add submenu pages to create.
     */	
    public function addSubmenuPages( array $pages )
    {
        $this->submenu_pages = $pages;
    } // ADD SUBMENU PAGES
    
    /**
     * Add links to create.
     */	
    public function addLinks( array $links )
    {
        $this->links = $links;
    } // ADD LINKS
    
    /**
     * Bind the creation of pages and links with hooks.
     */
    public function install( string $plugin_file )
    {
        add_action( 'admin_menu', [ $this, 'createPages' ] );
        add_filter( "plugin_action_links_{$plugin_file}", [ $this, 'createLinks' ] );
    } // INSTALL
    
    /**
     * Create all menu or submenu pages (visible in the left panel).
     */
    public function createPages()
    {
        foreach ( $this->menu_pages as $page )
        {
            add_menu_page(
                $page['page_title'],
                $page['menu_title'],
                $page['capability'],
                $page['menu_slug'],
                $page['function'],
                $page['icon_url'],
                $page['position']
            );
        } // foreach
        
        foreach ( $this->submenu_pages as $page )
        {
            add_submenu_page(
                $page['parent_slug'],
                $page['page_title'],
                $page['menu_title'],
                $page['capability'],
                $page['menu_slug'],
                $page['function'],
                $page['position']
            );
        } // foreach
    } // CREATE PAGES
    
    /**
     * Create all links (visible in the "Installed Plugins" nearby this plugin).
     */
    public function createLinks( $links )
    {
        foreach ( $this->links as $link )
        {
            # Put the link before or after the default 'Deactivate' link
            if ($link['order'] == 'before')
            {
                array_unshift($links, $link['link']);
            } // if
            else if ($link['order'] == 'after')
            {
                array_push($links, $link['link']);
            } // else if
        } // foreach
        
        return $links;
    } // CREATE LINKS
} // RM PAGE CREATOR

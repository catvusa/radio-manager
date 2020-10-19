<?php

namespace Inc;

/**
 * This class is used for creating all menu or submenu pages.
 */
class RMPageCreator
{
    private $menu_pages;
    private $submenu_pages;
    
    /**
     * Initialize all attributes.
     */
    public function __construct()
    {
        $menu_pages = [];
        $submenu_pages = [];
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
     * Bind the creation of pages with the specific hook.
     */
    public function install()
    {
        add_action( 'admin_menu', [ $this, 'createPages' ] );
    } // REGISTER
    
    /**
     * Create all menu or submenu pages.
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
} // RM PAGE CREATOR

<?php

namespace Inc;

/**
 * This class is used for creating all meta boxes.
 */
class RMMetaBoxCreator
{
    /**
     * Bind the creation of meta boxes with the specific hook.
     */
    public static function installMetaBoxes()
    {
        add_action( 'add_meta_boxes', [ __CLASS__, 'createMetaBoxes' ] );
    } // INSTALL META BOXES
    
    /**
     * Create all meta boxes.
     */
    public static function createMetaBoxes()
    {
        /**
         * Meta box: Shortcode.
         */

        add_meta_box(
            'rm_shortcode_meta_box', # ID
            'Shortcode', # Title
            [ __CLASS__, 'createShortcodeMetaBoxHTML' ], # Callback
            'radio_station', # Screen
            'side', # Context
            'high', # Priority
        );
    } // CREATE META BOXES
    
    /**
     * Create an HTML of the shortcode meta box.
     */
    public static function createShortcodeMetaBoxHTML( $post )
    {
        ?>
        Insert this little code into some of your pages or posts:
        <br /><br />
        [radio-station id="<?= $post->ID ?>"]
        <?php
    } // CREATE SHORTCODE META BOX HTML
} // RM META BOX CREATOR
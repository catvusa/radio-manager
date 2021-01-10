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
    public static function install()
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

        Copy and paste the following shortcode into a WordPress post or page to embed this radio station:
        <br /><br />
		<div class="rm-flex">
			<pre id="rm-shortcode">[radio-station id="<?= $post->ID ?>"]</pre>
			<input type="button" value="Copy" onClick="rmCopy( 'rm-shortcode' );">
		</div>

        <?php
    } // CREATE SHORTCODE META BOX HTML
} // RM META BOX CREATOR

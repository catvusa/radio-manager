<?php

namespace Inc;

/**
 * This class is used for creating all shortcodes.
 */
class RMShortcodeCreator
{
    /**
     * Create all shortcodes.
     */
    public static function install()
    {
        /**
         * Shortcode: Radio Station.
         */

        add_shortcode(
            'radio-station', # Tag
            [ __CLASS__, 'createShortcodeRadioStationHTML' ], # Callback
        );
    } // CREATE SHORTCODES
    
    /**
     * Create an HTML of the radio station shortcode.
     */
    public static function createShortcodeRadioStationHTML( $atts )
    {
        # Merge both arguments and return an array only with keys included in the first array
        $atts = shortcode_atts( array( 'id' => '' ), $atts );
        
        # Get the post of the radio station
        $post = get_post( $atts['id'] );
        
        # Start writing the output into a buffer
        ob_start();
        
        ?>
        
        <?= $post->post_title; ?>
        
        <?php
        
        # Get the content of the buffer
        $content = ob_get_contents();
        
        # Stop writing the output into the buffer and delete saved data
        ob_end_clean();
        
        return $content;
    } // CREATE SHORTCODE RADIO STATION HTML
} // RM SHORTCODE CREATOR

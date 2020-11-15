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
        
		# Set all the data for frontend
		$rm_data = array(
			"name" => get_the_title( $atts['id'] ),
			"logo" => get_the_post_thumbnail_url( $atts['id'] ),
			"imgDuration" => 6,
			"player" => "rm-radio-player",
			"genres" => [],
			"playlistItems" => [],
			"posts" => [],
			"warnings" => [],
		);
		
		# Send all the data for frontend
		wp_localize_script("rm-main-frontend-scripts", "rm_data", $rm_data);
		
		# Insert the scripts and styles
		wp_enqueue_style( "rm-main-frontend-styles" );
		wp_enqueue_script( "rm-main-frontend-scripts" );
		
		
        # Start writing the output into a buffer
        ob_start();
		
        ?>

		<div id="rm-radio-station">
		
			<div class="rm-bg-primary rm-brd rm-padding rm-center">
				<span id="rm-radio-name" class="rm-title-level1"></span>
			</div>
			
			<div id="rm-musician-image-field" class="rm-brd">
				<img id="rm-musician-image">
				<div style="display: none;">
					<audio id="rm-radio-player"></audio>
				</div>
			</div>
			
			<div class="rm-bg-primary rm-brd rm-flex">
			
				<div id="rm-left-field">
					<img id="rm-left-icon" class="rm-icons">
				</div>
				
				<div id="rm-middle-field" class="rm-center">
					<div id="rm-musician-name" class="rm-title-level2"></div>
					<div id="rm-record-name" class="rm-title-level3"></div>
				</div>
				
				<div id="rm-right-field">
					<img id="rm-right-icon" class="rm-icons">
				</div>
				
			</div>
			
			<div id="rm-musician-description-field" class="rm-bg-secondary rm-brd rm-padding">
				<div id="rm-musician-description-gradient"></div>
				<span id="rm-musician-description"></span>
			</div>
			
		</div>
        
        <?php
        
        # Get the content of the buffer
        $content = ob_get_contents();
        
        # Stop writing the output into the buffer and delete saved data
        ob_end_clean();
        
        return $content;
    } // CREATE SHORTCODE RADIO STATION HTML
} // RM SHORTCODE CREATOR

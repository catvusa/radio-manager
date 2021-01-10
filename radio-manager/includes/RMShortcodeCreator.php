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
        
		# Prepare all the data for frontend
		$data = self::prepareData( $atts['id'] );
		
		# Send all the data to frontend
		wp_localize_script("rm-main-frontend-scripts", "rmData" . $atts['id'], $data);
		
		# Insert the scripts and styles
		wp_enqueue_style( "rm-main-frontend-styles" );
		wp_enqueue_script( "rm-main-frontend-scripts" );
		
        # Start writing the output into a buffer
        ob_start();
				
        ?>
        
        <?php
		
        # Get the content of the buffer
        $content = ob_get_contents();
        
        # Stop writing the output into the buffer and delete saved data
        ob_end_clean();
        
        return $content;
    } // CREATE SHORTCODE RADIO STATION HTML
	
    /**
     * Prepare the data for the radio station.
     */
    public static function prepareData( $radio_station_id )
    {
		$name = get_the_title( $radio_station_id );
		$logo = get_the_post_thumbnail_url( $radio_station_id );
		
		// ========================================
		
		// Get the settings of the radio station
		if ( have_rows( "rm_radio_settings", $radio_station_id ) )
		{
			while( have_rows( "rm_radio_settings", $radio_station_id ) )
			{
				the_row();

				$img_duration = get_sub_field( "rm_radio_photo_duration" );
				$post_type = get_sub_field( "rm_radio_post_type" );
			} // while
		} // if

		// ========================================

		// Get the playlist of the radio station
		if ( have_rows( "rm_radio_playlist", $radio_station_id ) )
		{
			$playlist_items = [];
			while( have_rows( "rm_radio_playlist", $radio_station_id ) )
			{
				the_row();

				$playlist_item = [
					"genre" => get_sub_field( "rm_radio_genre" ),
					"numOfMusicians" => get_sub_field( "rm_radio_num_of_musicians" ),
					"numOfSongsPerMusician" => get_sub_field( "rm_radio_num_of_songs" ),
					"showPosts" => get_sub_field( "rm_radio_show_posts" ),
				];
				array_push($playlist_items, $playlist_item);
			} // while
		} // if
		
		// ========================================
		
		// Get the warnings of the radio station
		if ( have_rows( "rm_radio_warnings", $radio_station_id ) )
		{
			$warnings = [];
			while( have_rows( "rm_radio_warnings", $radio_station_id ) )
			{
				the_row();

				$warning = [
					"isActive" => get_sub_field( "rm_radio_active" ),
					"first" => get_sub_field( "rm_radio_first" ),
					"step" => get_sub_field( "rm_radio_step" ),
					"title" => get_sub_field( "rm_radio_title" ),
					"message" => get_sub_field( "rm_radio_message" ),
					"buttonText" => get_sub_field( "rm_radio_button_text" ),
					"buttonLink" => get_sub_field( "rm_radio_button_link" ),
				];

				if ( $warning["isActive"] )
				{
					$user_group = get_sub_field( "rm_radio_show_to" );
					if ($user_group == "Registered")
					{
						if ( is_user_logged_in() )
						{
							// The warning appers
						} // if
						else
						{
							// The warning disappears
							$warning["isActive"] = false;
						} // else
					} // if
					else if ($user_group == "Unregistered")
					{
						if ( is_user_logged_in() )
						{
							// The warning disappears
							$warning["isActive"] = false;
						} // if
						else
						{
							// The warning appers
						} // else
					} // else if
					
				} // if

				array_push($warnings, $warning);
			} // while
		} // if		

		// ========================================

		// Create the genres of the radio station
		$genres = [];
		foreach ($playlist_items as $playlist_item)
		{
			$genre = $playlist_item[ "genre" ]->slug;
			
			// Remove duplicates
			if ( array_key_exists( $genre, $genres ) )
			{
				continue;
			} // if
			
			// Add new music genre
			$genres[$genre] = [];
			
			// Get all the musicians of this genre
			$musicians = new \WP_Query( array(
				"post_type" => "musician",
				"posts_per_page" => "-1",
				"tax_query" => array(
					array(
						"taxonomy" => "genre",
						"field"    => "slug",
						"terms"    => $genre,
					),
				),
			) );
			
			// Fill the genre with musicians
			if ( $musicians->have_posts() )
			{	
				while ( $musicians->have_posts() )
				{
					$musicians->the_post();
					
					$musician = [
						"name" => get_the_title(),
						"description" => wpautop( get_the_content() ),
						"images" => [],
						"introductions" => [],
						"records" => [],
					];
					
					// Get the images of the radio station
					if ( have_rows( "rm_musician_images", get_the_ID() ) )
					{
						while ( have_rows( "rm_musician_images", get_the_ID() ) )
						{
							the_row();

							$image = [
								"url" => get_sub_field( "rm_musician_image" )[ "url" ],
							];
							
							array_push( $musician["images"], $image );
						} // while
					} // if
					
					// Get the introductions of the radio station
					if ( have_rows( "rm_musician_introductions", get_the_ID() ) )
					{
						while ( have_rows( "rm_musician_introductions", get_the_ID() ) )
						{
							the_row();

							$introduction = [
								"url" => get_sub_field( "rm_musician_introduction" )[ "url" ],
							];
							
							array_push( $musician["introductions"], $introduction );
						} // while
					} // if
					
					// Get the records of the radio station
					if ( have_rows( "rm_musician_records", get_the_ID() ) )
					{
						while ( have_rows( "rm_musician_records", get_the_ID() ) )
						{
							the_row();

							$record = [
								"title" => get_sub_field( "rm_musician_record" )[ "title" ],
								"url" => get_sub_field( "rm_musician_record" )[ "url" ],
							];
							
							array_push( $musician["records"], $record );
						} // while
					} // if
					
					array_push($genres[$genre], $musician);
				} # while
			} # if
			wp_reset_postdata();
		} // foreach
		
		// ========================================
		
		// Get the posts of the radio station post type
		$posts = [];
		$query_posts = new \WP_Query( array(
			"post_type" => $post_type,
			"posts_per_page" => "-1",
		) );
		
		// Fill the genre with musicians
		if ( $query_posts->have_posts() )
		{	
			while ( $query_posts->have_posts() )
			{
				$query_posts->the_post();
				
				$post = [
					"image" => get_the_post_thumbnail_url(),
					"content" => get_the_content(),
				];
				
				array_push($posts, $post);
			} // while
			
		} // if
		wp_reset_postdata();
		
		// ========================================
		
		$data = [
			"name" => $name,
			"logo" => $logo,
			"imgDuration" => $img_duration,
			"genres" => $genres,
			"playlistItems" => $playlist_items,
			"posts" => $posts,
			"warnings" => $warnings,
		];
		
		return $data;
	} // PREPARE DATA
} // RM SHORTCODE CREATOR

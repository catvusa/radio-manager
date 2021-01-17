<?php

namespace Inc;

/**
 * Represent a singleton creator that
 * creates the shortcode for importing
 * the radio stations.
 */
class RMShortcodeCreator extends RMSubsystem
{
  /**
   * Install all the shortcodes.
   */
  public function install()
  {
    $this->createShortcodes();
  } // INSTALL

  /**
   * Remove all the shortcodes.
   * @see remove_shortcode() for removing custom shortcodes.
   */
  public function uninstall()
  {
    remove_shortcode( RM_RADIO_STATION_POST_TYPE );
  } // UNINSTALL

  /**
   * Add all the shortcodes.
   * @see add_shortcode() for adding custom shortcodes.
   */
  public function createShortcodes()
  {
    /**
     * Shortcode: Radio Station.
     */
    add_shortcode(
      RM_RADIO_STATION_POST_TYPE, // Tag
      [ $this, "createRadioStationShortcodeHTML" ], // Callback
    );
  } // CREATE SHORTCODES

  /**
   * Create the content of the radio
   * station shortcode.
   * @param array $atts – An array of the shortcode attributes.
   * @return string $content – The content of the shortcode.
   * @see wp_localize_script() for localizing custom scripts.
   */
  public function createRadioStationShortcodeHTML( $atts )
  {
    // Get the ID from the attributes
    $atts = shortcode_atts( [ "id" => "" ], $atts );
        
    // Send all the data to frontend
    wp_localize_script( "rm-frontend-scripts", "rmData" . $atts[ "id" ], $this->getData( $atts[ "id" ] ) );

    // Create the content for the shortcode
    $content = "<div data-rm-output-id=" . $atts[ "id" ] . "></div>";
        
    return $content;
  } // CREATE RADIO STATION SHORTCODE HTML
  
  /**
   * Get the radio station data.
   * @param string $radioStationID – The ID of the radio station page.
   * @return array $data – An array of the radio station data.
   */
  public function getData( $radioStationID )
  {
    $radioName = get_the_title( $radioStationID );
    $radioLogo = $this->getRadioLogo( $radioStationID );
    $radioSettings = $this->getRadioSettings( $radioStationID );
    $radioPlaylist = $this->getRadioPlaylist( $radioStationID );
    $radioWarnings = $this->getRadioWarnings( $radioStationID );

    $data =
    [
      "radioName"       => $radioName,
      "musicianCaption" => $radioSettings[ "musicianCaption" ],
      "recordCaption"   => $radioSettings[ "recordCaption" ],
      "imgDuration"     => $radioSettings[ "imgDuration" ],
      "logo"            => $radioLogo,
      "warningData"     => $radioWarnings,
      "postData"        => $radioSettings[ "postData" ],
      "playlistData"    => $radioPlaylist,
    ];
        
    return $data;
  } // GET DATA

  /**
   * Get the radio station logo.
   * @param string $radioStationID – The ID of the radio station page.
   * @return array $radioLogo – An array of the radio station logo.
   */
  public function getRadioLogo( $radioStationID )
  {
    $radioLogo = [];
    $logoID = get_post_thumbnail_id( $radioStationID );
    
    if ( $logoID )
    {
      $radioLogo =
      [
        [
          "title"       => get_post( $logoID )->post_title,
          "description" => get_post( $logoID )->post_content,
          "src"         => get_post( $logoID )->guid,
        ],
      ];
    } // if

    return $radioLogo;
  } // GET RADIO LOGO

  /**
   * Get the radio station settings 
   * (means image duration, website
   * posts, musician caption and
   * record caption).
   * @param string $radioStationID – The ID of the radio station page.
   * @return array $radioSettings – An array of the radio station settings.
   */
  public function getRadioSettings( $radioStationID )
  {
    // Process all the settings
    if ( have_rows( "rm_radio_settings", $radioStationID ) )
    {
      while ( have_rows( "rm_radio_settings", $radioStationID ) )
      {
        the_row();

        // An array for website posts
        $postData = [];

        $originalPosts = get_sub_field( "rm_radio_website_posts" );

        // Process all the website posts
        if ( $originalPosts )
        {
          foreach ( $originalPosts as $originalPost )
          {
            $thumbnailID = get_post_thumbnail_id( $originalPost->ID );
            
            if ( $thumbnailID )
            {
              $post =
              [
                "image"   =>
                [
                  [
                    "title"       => get_post( $thumbnailID )->post_title,
                    "description" => get_post( $thumbnailID )->post_content,
                    "src"         => get_post( $thumbnailID )->guid,
                  ],
                ],
                "content" => wpautop( $originalPost->post_content ),
              ];
            } // if
            else
            {
              $post =
              [
                "image"   => [],
                "content" => wpautop( $originalPost->post_content ),
              ];
            } // else

            array_push( $postData, $post );
          } // foreach
        } // if

        // An array with all the settings
        $radioSettings =
        [
          "musicianCaption" => get_sub_field( "rm_radio_musician_caption" ),
          "recordCaption"   => get_sub_field( "rm_radio_record_caption" ),
          "imgDuration"     => ( int ) get_sub_field( "rm_radio_image_duration" ) * 1000,
          "postData"        => $postData,
        ];

        return $radioSettings;
      } // while
    } // if
  } // GET RADIO SETTINGS

  /**
   * Get the radio station playlist.
   * @param string $radioStationID – The ID of the radio station page.
   * @return array $radioPlaylist – An array of the radio station playlist items.
   */
  public function getRadioPlaylist( $radioStationID )
  {
    $radioPlaylist = [];
    $genres = [];

    // Process all the playlist items
    if ( have_rows( "rm_radio_playlist", $radioStationID ) )
    {
      while ( have_rows( "rm_radio_playlist", $radioStationID ) )
      {
        the_row();

        $genre = get_sub_field( "rm_radio_genre" );

        // Get all the musicians
        if ( !array_key_exists( $genre->slug, $genres ) )
        {
          $genres[ $genre->slug ] = $this->getGenreMusicians( $genre->slug );
        } // if
        
        // An array with the playlist item
        $radioPlaylistItem =
        [
          "genre"                   =>
          [
            "slug"      => $genre->slug,
            "musicians" => $genres[ $genre->slug ],
          ],
          "numOfMusicians"          => get_sub_field( "rm_radio_num_of_musicians" ),
          "numOfRecordsPerMusician" => get_sub_field( "rm_radio_num_of_records" ),
          "showWebsitePosts"        => get_sub_field( "rm_radio_show_website_posts" ),
        ];

        array_push( $radioPlaylist, $radioPlaylistItem );
      } // while
    } // if

    return $radioPlaylist;
  } // GET RADIO PLAYLIST

  /**
   * Get the genre musicians.
   * @param string $term – The specific term of the genre taxonomy (e.g. classical).
   * @return array $musicians – An array of the respective musicians.
   */
  public function getGenreMusicians( $term )
  {
    $musicians = [];

    // Get all the musicians of the genre
    $posts = new \WP_Query(
      [
        "post_type"      => RM_MUSICIAN_POST_TYPE,
        "posts_per_page" => "-1",
        "tax_query"      =>
        [
          [
            "taxonomy" => RM_GENRE_TAXONOMY,
            "field"    => "slug",
            "terms"    => $term,
          ],
        ],
      ],
    );

    // Process all the musicians of the genre
    if ( $posts->have_posts() )
    {   
      while ( $posts->have_posts() )
      {
        $posts->the_post();
        
        // An array with the musician
        $musician =
        [
          "id"            => get_the_ID(),
          "name"          => get_the_title(),
          "description"   => wpautop( get_the_content() ),
          "images"        => $this->getMusicianImages( get_the_ID() ),
          "introductions" => $this->getMusicianIntroductions( get_the_ID() ),
          "records"       => $this->getMusicianRecords( get_the_ID() ),
        ];

        array_push( $musicians, $musician );
      } // while
    } // if

    // Reset the global post variable
    wp_reset_postdata();

    return $musicians;
  } // GET GENRE MUSICIANS

  /**
   * Get the musician images.
   * @param string $id – The ID of the musician page.
   * @return array $images – An array of the musician images.
   */
  public function getMusicianImages( $id )
  {
    $images = [];

    // Process all the images
    if ( have_rows( "rm_musician_images", $id ) )
    {
      while ( have_rows( "rm_musician_images", $id ) )
      {
        the_row();

        $originalImage = get_sub_field( "rm_musician_image" );
        
        // An array with the image
        $image =
        [
          "title"       => $originalImage[ "title" ],
          "description" => $originalImage[ "description" ],
          "src"         => $originalImage[ "url" ],
        ];
                            
        array_push( $images, $image );
      } // while
    } // if

    return $images;
  } // GET MUSICIAN IMAGES

  /**
   * Get the musician introductions.
   * @param string $id – The ID of the musician page.
   * @return array $introductions – An array of the musician introductions.
   */
  public function getMusicianIntroductions( $id )
  {
    $introductions = [];

    // Process all the introductions
    if ( have_rows( "rm_musician_introductions", $id ) )
    {
      while ( have_rows( "rm_musician_introductions", $id ) )
      {
        the_row();

        $originalIntroduction = get_sub_field( "rm_musician_introduction" );

        // An array with the introduction
        $introduction =
        [
          "src"  => $originalIntroduction[ "url" ],
          "type" => $originalIntroduction[ "type" ],
        ];
                            
        array_push( $introductions, $introduction );
      } // while
    } // if

    return $introductions;
  } // GET MUSICIAN INTRODUCTIONS

  /**
   * Get the musician records.
   * @param string $id – The ID of the musician page.
   * @return array $records – An array of the musician records.
   */
  public function getMusicianRecords( $id )
  {
    $records = [];

    // Process all the records
    if ( have_rows( "rm_musician_records", $id ) )
    {
      while ( have_rows( "rm_musician_records", $id ) )
      {
        the_row();

        $originalRecord = get_sub_field( "rm_musician_record" );
        
        // An array with the record
        $record =
        [
          "title" => $originalRecord[ "title" ],
          "src"   => $originalRecord[ "url" ],
          "type"  => $originalRecord[ "type" ],
        ];
                            
        array_push( $records, $record );
      } // while
    } // if

    return $records;
  } // GET MUSICIAN RECORDS

  /**
   * Get the radio station warnings.
   * @param string $radioStationID – The ID of the radio station page.
   * @return array $radioWarnings – An array of the radio station warnings.
   */
  public function getRadioWarnings( $radioStationID )
  {
    $radioWarnings = [];

    // The s2Member Framework plugin (with the s2Member Pro add-on) must be installed
    $isUserRegistered =
    (
      current_user_can( "access_s2member_level0" ) ||
      current_user_can( "access_s2member_level1" ) ||
      current_user_can( "access_s2member_level2" ) ||
      current_user_can( "access_s2member_level3" ) ||
      current_user_can( "access_s2member_level4" )
    );

    // Process all the warnings
    if ( have_rows( "rm_radio_warnings", $radioStationID ) )
    {
      while ( have_rows( "rm_radio_warnings", $radioStationID ) )
      {
        the_row();

        $isWarningActive = get_sub_field( "rm_radio_active" );
        $targetUserGroup = get_sub_field( "rm_radio_show_to" );
        $canWarningShow =
        (
          ( $isWarningActive && $targetUserGroup == "all" ) ||
          ( $isWarningActive && $targetUserGroup == "registered" && $isUserRegistered == true ) ||
          ( $isWarningActive && $targetUserGroup == "not_registered" && $isUserRegistered == false )
        );

        if ( $canWarningShow )
        {
          // An array with the warning
          $radioWarning =
          [
            "first"   => get_sub_field( "rm_radio_first" ),
            "step"    => get_sub_field( "rm_radio_step" ),
            "title"   => get_sub_field( "rm_radio_title" ),
            "message" => get_sub_field( "rm_radio_message" ),
            "link"    => get_sub_field( "rm_radio_link" ),
          ];

          array_push( $radioWarnings, $radioWarning );
        } // if
      } // while
    } // if

    return $radioWarnings;
  } // GET RADIO WARNINGS
} // RM SHORTCODE CREATOR

<?php

namespace Inc;

/**
 * Represent a singleton creator that
 * creates the Advanced Custom Fields
 * plugin fields.
 */
class RMACFFieldCreator extends RMSubsystem
{
  /**
   * Hold a singleton instance.
   * @static
   */
  private static $instance = null;
    
  /**
   * Create a singleton (but it is
   * private in order to prevent
   * initiation from the outside).
   */
  private function __construct()
  {
  } // CONSTRUCTOR
  
  /**
   * Restrict cloning.
   */
  private function __clone()
  {
  } // CLONE

  /**
   * Get the singleton instance.
   * @static
   * @return object - The instance of this class.
   */
  public static function getInstance()
  {
    if ( self::$instance == null )
    {
      // Create only from within the class
      self::$instance = new self();
    } // if

    return self::$instance;
  } // GET INSTANCE

  /**
   * Install all the fields.
   */
  public function install()
  {
    add_action( "init", [ $this, "createACFFields" ] );
  } // INSTALL

  /**
   * Remove all the fields.
   */
  public function uninstall()
  {
    // The ACF plugin (with the Repeater Field add-on) must be installed
    if ( function_exists( "acf_remove_local_field_group" ) )
    {
      acf_remove_local_field_group( "group_5fb1a14bb7008" ); // Settings
      acf_remove_local_field_group( "group_5fb18960680d4" ); // Playlist
      acf_remove_local_field_group( "group_5fb1927b0b18b" ); // Warnings
      acf_remove_local_field_group( "group_5fb15e461e259" ); // Images
      acf_remove_local_field_group( "group_5fb1658de4f9f" ); // Introductions
      acf_remove_local_field_group( "group_5fb16ed0c44b2" ); // Recordings
    } // if
  } // UNINSTALL

  /**
   * Add all the fields.
   */
  public function createACFFields()
  {
    // The ACF plugin (with the Repeater Field add-on) must be installed
    if ( function_exists( "acf_add_local_field_group" ) )
    { 
      /**
       * The „Settings“ group field.
       */
      acf_add_local_field_group( array(
        "key" => "group_5fb1a14bb7008",
        "title" => "Settings",
        "fields" => array(
          array(
            "key" => "field_5fb1a151ae421",
            "label" => "",
            "name" => "rm_radio_settings",
            "type" => "group",
            "instructions" => "There you can set some basic settings of this radio station.",
            "required" => 0,
            "conditional_logic" => 0,
            "wrapper" => array(
              "width" => "",
              "class" => "",
              "id" => "",
            ),
            "layout" => "row",
            "sub_fields" => array(
              array(
                "key" => "field_5fb1a162ae422",
                "label" => "Image duration",
                "name" => "rm_radio_image_duration",
                "type" => "number",
                "instructions" => "Set the time for which every image of the musician is displayed when playing.",
                "required" => 0,
                "conditional_logic" => 0,
                "wrapper" => array(
                  "width" => "",
                  "class" => "",
                  "id" => "",
                ),
                "default_value" => 5,
                "placeholder" => "",
                "prepend" => "",
                "append" => "seconds",
                "min" => 1,
                "max" => "",
                "step" => 1,
              ),
              array(
                "key" => "field_5fcbc7e98db28",
                "label" => "Website posts",
                "name" => "rm_radio_website_posts",
                "type" => "relationship",
                "instructions" => "Set all the website posts to be projected when playing. Then enable projecting these posts for the specific playlist items in the playlist. Every website post is displayed for the duration of the recording.",
                "required" => 0,
                "conditional_logic" => 0,
                "wrapper" => array(
                  "width" => "",
                  "class" => "",
                  "id" => "",
                ),
                "post_type" => "",
                "taxonomy" => "",
                "filters" => array(
                  0 => "search",
                  1 => "post_type",
                  2 => "taxonomy",
                ),
                "elements" => array(
                  0 => "featured_image",
                ),
                "min" => "",
                "max" => "",
                "return_format" => "object",
              ),
              array(
                "key" => "field_5fd6201b3c5e7",
                "label" => "Musician caption",
                "name" => "rm_radio_musician_caption",
                "type" => "text",
                "instructions" => "Set a caption for the musician's name displayed in the player.",
                "required" => 0,
                "conditional_logic" => 0,
                "wrapper" => array(
                  "width" => "",
                  "class" => "",
                  "id" => "",
                ),
                "default_value" => "",
                "placeholder" => "Musician:",
                "prepend" => "",
                "append" => "",
                "maxlength" => "",
              ),
              array(
                "key" => "field_5fd6209c3c5e8",
                "label" => "Recording caption",
                "name" => "rm_radio_record_caption",
                "type" => "text",
                "instructions" => "Set a caption for the recording's name displayed in the player. ",
                "required" => 0,
                "conditional_logic" => 0,
                "wrapper" => array(
                  "width" => "",
                  "class" => "",
                  "id" => "",
                ),
                "default_value" => "",
                "placeholder" => "Recording:",
                "prepend" => "",
                "append" => "",
                "maxlength" => "",
              ),
            ),
          ),
        ),
        "location" => array(
          array(
            array(
              "param" => "post_type",
              "operator" => "==",
              "value" => RM_RADIO_STATION_POST_TYPE,
            ),
          ),
        ),
        "menu_order" => 0,
        "position" => "normal",
        "style" => "default",
        "label_placement" => "top",
        "instruction_placement" => "label",
        "hide_on_screen" => "",
        "active" => true,
        "description" => "",
      ));

      /**
       * The „Playlist“ repeater field.
       */
      acf_add_local_field_group( array(
        "key" => "group_5fb18960680d4",
        "title" => "Playlist",
        "fields" => array(
          array(
            "key" => "field_5fb18971c2b0a",
            "label" => "",
            "name" => "rm_radio_playlist",
            "type" => "repeater",
            "instructions" => "There you can manage the playlist of this radio station. At least one playlist item is required. The playlist is played again and again.",
            "required" => 1,
            "conditional_logic" => 0,
            "wrapper" => array(
              "width" => "",
              "class" => "",
              "id" => "",
            ),
            "collapsed" => "field_5fb18997c2b0b",
            "min" => 0,
            "max" => 0,
            "layout" => "row",
            "button_label" => "Add Playlist Item",
            "sub_fields" => array(
              array(
                "key" => "field_5fb18997c2b0b",
                "label" => "Genres",
                "name" => "rm_radio_genres",
                "type" => "taxonomy",
                "instructions" => "Set music genres as the groups of musicians.",
                "required" => 1,
                "conditional_logic" => 0,
                "wrapper" => array(
                  "width" => "",
                  "class" => "",
                  "id" => "",
                ),
                "taxonomy" => RM_GENRE_TAXONOMY,
                "field_type" => "multi_select",
                "allow_null" => 0,
                "add_term" => 0,
                "save_terms" => 0,
                "load_terms" => 0,
                "return_format" => "object",
                "multiple" => 0,
              ),
              array(
                "key" => "field_5fb18a2bc2b0c",
                "label" => "Number of musicians",
                "name" => "rm_radio_num_of_musicians",
                "type" => "range",
                "instructions" => "Set a number of musicians to be played per genre.",
                "required" => 0,
                "conditional_logic" => 0,
                "wrapper" => array(
                  "width" => "",
                  "class" => "",
                  "id" => "",
                ),
                "default_value" => 1,
                "min" => 1,
                "max" => "",
                "step" => 1,
                "prepend" => "",
                "append" => "musicians",
              ),
              array(
                "key" => "field_5fb18a75c2b0d",
                "label" => "Number of recordings",
                "name" => "rm_radio_num_of_records",
                "type" => "range",
                "instructions" => "Set a number of recordings to be played per musician.",
                "required" => 0,
                "conditional_logic" => 0,
                "wrapper" => array(
                  "width" => "",
                  "class" => "",
                  "id" => "",
                ),
                "default_value" => 1,
                "min" => 1,
                "max" => "",
                "step" => 1,
                "prepend" => "",
                "append" => "recordings",
              ),
              array(
                "key" => "field_5fb18aa6c2b0e",
                "label" => "Show website posts",
                "name" => "rm_radio_show_website_posts",
                "type" => "true_false",
                "instructions" => "Set whether the website posts are being projected while playing this playlist item or not. You can manage all the website posts in the settings.",
                "required" => 0,
                "conditional_logic" => 0,
                "wrapper" => array(
                  "width" => "",
                  "class" => "",
                  "id" => "",
                ),
                "message" => "",
                "default_value" => 0,
                "ui" => 1,
                "ui_on_text" => "YES",
                "ui_off_text" => "NO",
              ),
            ),
          ),
        ),
        "location" => array(
          array(
            array(
              "param" => "post_type",
              "operator" => "==",
              "value" => RM_RADIO_STATION_POST_TYPE,
            ),
          ),
        ),
        "menu_order" => 1,
        "position" => "normal",
        "style" => "default",
        "label_placement" => "top",
        "instruction_placement" => "label",
        "hide_on_screen" => "",
        "active" => true,
        "description" => "",
      ));

      /**
       * The „Warnings“ repeater field.
       */
      acf_add_local_field_group( array(
        "key" => "group_5fb1927b0b18b",
        "title" => "Warnings",
        "fields" => array(
          array(
            "key" => "field_5fb1933b612ff",
            "label" => "",
            "name" => "rm_radio_warnings",
            "type" => "repeater",
            "instructions" => "There you can add, edit, or remove warnings of this radio station. These warnings are being projected while playing.",
            "required" => 0,
            "conditional_logic" => 0,
            "wrapper" => array(
              "width" => "",
              "class" => "",
              "id" => "",
            ),
            "collapsed" => "field_5fb197f561304",
            "min" => 0,
            "max" => 0,
            "layout" => "row",
            "button_label" => "Add Warning",
            "sub_fields" => array(
              array(
                "key" => "field_5fb193fd61300",
                "label" => "Active",
                "name" => "rm_radio_active",
                "type" => "true_false",
                "instructions" => "Set whether this warning shows or not.",
                "required" => 0,
                "conditional_logic" => 0,
                "wrapper" => array(
                  "width" => "",
                  "class" => "",
                  "id" => "",
                ),
                "message" => "",
                "default_value" => 0,
                "ui" => 1,
                "ui_on_text" => "YES",
                "ui_off_text" => "NO",
              ),
              array(
                "key" => "field_5fcbe198d3506",
                "label" => "Show to",
                "name" => "rm_radio_show_to",
                "type" => "select",
                "instructions" => "Set the user group that is supposed to see this warning.",
                "required" => 0,
                "conditional_logic" => 0,
                "wrapper" => array(
                  "width" => "",
                  "class" => "",
                  "id" => "",
                ),
                "choices" => array(
                  "all" => "All users",
                  "registered" => "Registered in the s2Member",
                  "not_registered" => "Not registered in the s2Member",
                ),
                "default_value" => false,
                "allow_null" => 0,
                "multiple" => 0,
                "ui" => 0,
                "return_format" => "value",
                "ajax" => 0,
                "placeholder" => "",
              ),
              array(
                "key" => "field_5fb1945f61301",
                "label" => "First",
                "name" => "rm_radio_first",
                "type" => "number",
                "instructions" => "Set the first time when this warning appears (counted per musician).",
                "required" => 0,
                "conditional_logic" => 0,
                "wrapper" => array(
                  "width" => "",
                  "class" => "",
                  "id" => "",
                ),
                "default_value" => 0,
                "placeholder" => "",
                "prepend" => "",
                "append" => "musicians",
                "min" => 0,
                "max" => "",
                "step" => 1,
              ),
              array(
                "key" => "field_5fb194e561302",
                "label" => "Step",
                "name" => "rm_radio_step",
                "type" => "number",
                "instructions" => "Set a regular step between the last time and the next time this warning appears (counted per musician).",
                "required" => 0,
                "conditional_logic" => 0,
                "wrapper" => array(
                  "width" => "",
                  "class" => "",
                  "id" => "",
                ),
                "default_value" => 1,
                "placeholder" => "",
                "prepend" => "",
                "append" => "musicians",
                "min" => 1,
                "max" => "",
                "step" => 1,
              ),
              array(
                "key" => "field_5fb197f561304",
                "label" => "Title",
                "name" => "rm_radio_title",
                "type" => "text",
                "instructions" => "Set the heading of this warning.",
                "required" => 0,
                "conditional_logic" => 0,
                "wrapper" => array(
                  "width" => "",
                  "class" => "",
                  "id" => "",
                ),
                "default_value" => "",
                "placeholder" => "",
                "prepend" => "",
                "append" => "",
                "maxlength" => "",
              ),
              array(
                "key" => "field_5fb1983261305",
                "label" => "Message",
                "name" => "rm_radio_message",
                "type" => "textarea",
                "instructions" => "Set the content of this warning.",
                "required" => 1,
                "conditional_logic" => 0,
                "wrapper" => array(
                  "width" => "",
                  "class" => "",
                  "id" => "",
                ),
                "default_value" => "",
                "placeholder" => "",
                "maxlength" => "",
                "rows" => "",
                "new_lines" => "br",
              ),
              array(
                "key" => "field_5fb1989661307",
                "label" => "Link",
                "name" => "rm_radio_link",
                "type" => "url",
                "instructions" => "Set the URL link of the confirm button of this warning. If it is empty, then clicking the confirm button will close the warning.",
                "required" => 0,
                "conditional_logic" => 0,
                "wrapper" => array(
                  "width" => "",
                  "class" => "",
                  "id" => "",
                ),
                "default_value" => "",
                "placeholder" => "https:// ...",
              ),
            ),
          ),
        ),
        "location" => array(
          array(
            array(
              "param" => "post_type",
              "operator" => "==",
              "value" => RM_RADIO_STATION_POST_TYPE,
            ),
          ),
        ),
        "menu_order" => 2,
        "position" => "normal",
        "style" => "default",
        "label_placement" => "top",
        "instruction_placement" => "label",
        "hide_on_screen" => "",
        "active" => true,
        "description" => "",
      ));

      /**
       * The „Images“ repeater field.
       */
      acf_add_local_field_group( array(
        "key" => "group_5fb15e461e259",
        "title" => "Images",
        "fields" => array(
          array(
            "key" => "field_5fb15e70941c5",
            "label" => "",
            "name" => "rm_musician_images",
            "type" => "repeater",
            "instructions" => "There you can add, edit, or remove images of this musician. These images are being projected while playing recordings from this musician.",
            "required" => 0,
            "conditional_logic" => 0,
            "wrapper" => array(
              "width" => "",
              "class" => "",
              "id" => "",
            ),
            "collapsed" => "",
            "min" => 0,
            "max" => 0,
            "layout" => "table",
            "button_label" => "Add Image",
            "sub_fields" => array(
              array(
                "key" => "field_5fb15ee8941c6",
                "label" => "Image",
                "name" => "rm_musician_image",
                "type" => "image",
                "instructions" => "A JPG/PNG/GIF file.",
                "required" => 1,
                "conditional_logic" => 0,
                "wrapper" => array(
                  "width" => "",
                  "class" => "",
                  "id" => "",
                ),
                "return_format" => "array",
                "preview_size" => "medium",
                "library" => "all",
                "min_width" => "",
                "min_height" => "",
                "min_size" => "",
                "max_width" => "",
                "max_height" => "",
                "max_size" => "",
                "mime_types" => "JPG,PNG,GIF",
              ),
            ),
          ),
        ),
        "location" => array(
          array(
            array(
              "param" => "post_type",
              "operator" => "==",
              "value" => RM_MUSICIAN_POST_TYPE,
            ),
          ),
        ),
        "menu_order" => 0,
        "position" => "normal",
        "style" => "default",
        "label_placement" => "top",
        "instruction_placement" => "label",
        "hide_on_screen" => "",
        "active" => true,
        "description" => "",
      ));

      /**
       * The „Introductions“ repeater field.
       */
      acf_add_local_field_group( array(
        "key" => "group_5fb1658de4f9f",
        "title" => "Introductions",
        "fields" => array(
          array(
            "key" => "field_5fb165a15f66e",
            "label" => "",
            "name" => "rm_musician_introductions",
            "type" => "repeater",
            "instructions" => "There you can add, edit, or remove audio/video introductions of this musician. When it is the musician's turn, one of these introductions is randomly chosen and played before the recordings.",
            "required" => 0,
            "conditional_logic" => 0,
            "wrapper" => array(
              "width" => "",
              "class" => "",
              "id" => "",
            ),
            "collapsed" => "",
            "min" => 0,
            "max" => 0,
            "layout" => "table",
            "button_label" => "Add Introduction",
            "sub_fields" => array(
              array(
                "key" => "field_5fb165eb5f66f",
                "label" => "Introduction",
                "name" => "rm_musician_introduction",
                "type" => "file",
                "instructions" => "An MP3/OGG/WAV/MP4 file.",
                "required" => 1,
                "conditional_logic" => 0,
                "wrapper" => array(
                  "width" => "",
                  "class" => "",
                  "id" => "",
                ),
                "return_format" => "array",
                "library" => "all",
                "min_size" => "",
                "max_size" => "",
                "mime_types" => "MP3,OGG,WAV,MP4",
              ),
            ),
          ),
        ),
        "location" => array(
          array(
            array(
              "param" => "post_type",
              "operator" => "==",
              "value" => RM_MUSICIAN_POST_TYPE,
            ),
          ),
        ),
        "menu_order" => 1,
        "position" => "normal",
        "style" => "default",
        "label_placement" => "top",
        "instruction_placement" => "label",
        "hide_on_screen" => "",
        "active" => true,
        "description" => "",
      ));

      /**
       * The „Recordings“ repeater field.
       */
      acf_add_local_field_group( array(
        "key" => "group_5fb16ed0c44b2",
        "title" => "Recordings",
        "fields" => array(
          array(
            "key" => "field_5fb16ee982dd8",
            "label" => "",
            "name" => "rm_musician_records",
            "type" => "repeater",
            "instructions" => "There you can add, edit, or remove audio/video recordings of this musician. At least one recording is required.",
            "required" => 1,
            "conditional_logic" => 0,
            "wrapper" => array(
              "width" => "",
              "class" => "",
              "id" => "",
            ),
            "collapsed" => "",
            "min" => 0,
            "max" => 0,
            "layout" => "table",
            "button_label" => "Add Recording",
            "sub_fields" => array(
              array(
                "key" => "field_5fb16f1382dd9",
                "label" => "Recording",
                "name" => "rm_musician_record",
                "type" => "file",
                "instructions" => "An MP3/OGG/WAV/MP4 file.",
                "required" => 1,
                "conditional_logic" => 0,
                "wrapper" => array(
                  "width" => "",
                  "class" => "",
                  "id" => "",
                ),
                "return_format" => "array",
                "library" => "all",
                "min_size" => "",
                "max_size" => "",
                "mime_types" => "MP3,OGG,WAV,MP4",
              ),
            ),
          ),
        ),
        "location" => array(
          array(
            array(
              "param" => "post_type",
              "operator" => "==",
              "value" => RM_MUSICIAN_POST_TYPE,
            ),
          ),
        ),
        "menu_order" => 2,
        "position" => "normal",
        "style" => "default",
        "label_placement" => "top",
        "instruction_placement" => "label",
        "hide_on_screen" => "",
        "active" => true,
        "description" => "",
      ));
    } // if
  } // CREATE ACF FIELDS
} // RM ACF FIELD CREATOR

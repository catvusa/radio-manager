<?php

namespace Inc;

/**
 * This class is used for creating all repeater fields.
 */
class RMRepeaterFieldCreator
{
    /**
     * Bind the creation of taxonomies with the specific hook.
     */
    public static function install()
    {
        self::createRepeaterFields();
        add_filter('acf/load_field/name=rm_radio_post_type', [ __CLASS__, 'loadPostTypesIntoSelectBox'] );
    } // INSTALL TAXONOMIES
    
    /**
     * Load post types into the select boxes.
     */
    public static function loadPostTypesIntoSelectBox( $field )
    {
        foreach ( get_post_types() as $post_type )
        {
           $field['choices'][$post_type] = $post_type;
        } // foreach
        
        return $field;
    } // LOAD POST TYPES INTO SELECT BOX
    
    /**
     * Install all repeater fields.
     * The ADVANCED CUSTOM FIELDS plugin including the REPEATER FIELD add-on must be installed!
     */
    public static function createRepeaterFields()
    {
        if ( function_exists( 'acf_add_local_field_group' ) )
        {
            /**
             * The 'Images' repeater field.
             */
            acf_add_local_field_group(array(
                'key' => 'group_5fb15e461e259',
                'title' => 'Images',
                'fields' => array(
                    array(
                        'key' => 'field_5fb15e70941c5',
                        'label' => '',
                        'name' => 'rm_musician_images',
                        'type' => 'repeater',
                        'instructions' => 'There you can add or remove some photos of this musician. These photos are being projected when playing songs by this musician.',
                        'required' => 0,
                        'conditional_logic' => 0,
                        'wrapper' => array(
                            'width' => '',
                            'class' => '',
                            'id' => '',
                        ),
                        'collapsed' => '',
                        'min' => 0,
                        'max' => 0,
                        'layout' => 'table',
                        'button_label' => 'Add Image',
                        'sub_fields' => array(
                            array(
                                'key' => 'field_5fb15ee8941c6',
                                'label' => 'Image',
                                'name' => 'rm_musician_image',
                                'type' => 'image',
                                'instructions' => 'A JPG/PNG/GIF file.',
                                'required' => 1,
                                'conditional_logic' => 0,
                                'wrapper' => array(
                                    'width' => '',
                                    'class' => '',
                                    'id' => '',
                                ),
                                'return_format' => 'array',
                                'preview_size' => 'medium',
                                'library' => 'all',
                                'min_width' => '',
                                'min_height' => '',
                                'min_size' => '',
                                'max_width' => '',
                                'max_height' => '',
                                'max_size' => '',
                                'mime_types' => 'JPG,PNG,GIF',
                            ),
                        ),
                    ),
                ),
                'location' => array(
                    array(
                        array(
                            'param' => 'post_type',
                            'operator' => '==',
                            'value' => 'musician',
                        ),
                    ),
                ),
                'menu_order' => 0,
                'position' => 'normal',
                'style' => 'default',
                'label_placement' => 'top',
                'instruction_placement' => 'label',
                'hide_on_screen' => '',
                'active' => true,
                'description' => '',
            ));

            /**
             * The 'Introductions' repeater field.
             */
            acf_add_local_field_group(array(
                'key' => 'group_5fb1658de4f9f',
                'title' => 'Introductions',
                'fields' => array(
                    array(
                        'key' => 'field_5fb165a15f66e',
                        'label' => '',
                        'name' => 'rm_musician_introductions',
                        'type' => 'repeater',
                        'instructions' => 'There you can add or remove some introductions of this musician. These introductions are being played before the records.',
                        'required' => 0,
                        'conditional_logic' => 0,
                        'wrapper' => array(
                            'width' => '',
                            'class' => '',
                            'id' => '',
                        ),
                        'collapsed' => '',
                        'min' => 0,
                        'max' => 0,
                        'layout' => 'table',
                        'button_label' => 'Add Introduction',
                        'sub_fields' => array(
                            array(
                                'key' => 'field_5fb165eb5f66f',
                                'label' => 'Introduction',
                                'name' => 'rm_musician_introduction',
                                'type' => 'file',
                                'instructions' => 'An MP3/OGG/WMA/MP4 file.',
                                'required' => 1,
                                'conditional_logic' => 0,
                                'wrapper' => array(
                                    'width' => '',
                                    'class' => '',
                                    'id' => '',
                                ),
                                'return_format' => 'array',
                                'library' => 'all',
                                'min_size' => '',
                                'max_size' => '',
                                'mime_types' => 'MP3,OGG,WMA,MP4',
                            ),
                        ),
                    ),
                ),
                'location' => array(
                    array(
                        array(
                            'param' => 'post_type',
                            'operator' => '==',
                            'value' => 'musician',
                        ),
                    ),
                ),
                'menu_order' => 1,
                'position' => 'normal',
                'style' => 'default',
                'label_placement' => 'top',
                'instruction_placement' => 'label',
                'hide_on_screen' => '',
                'active' => true,
                'description' => '',
            ));

            /**
             * The 'Records' repeater field.
             */
            acf_add_local_field_group(array(
                'key' => 'group_5fb16ed0c44b2',
                'title' => 'Records',
                'fields' => array(
                    array(
                        'key' => 'field_5fb16ee982dd8',
                        'label' => '',
                        'name' => 'rm_musician_records',
                        'type' => 'repeater',
                        'instructions' => 'There you can add or remove some records of this musician.',
                        'required' => 0,
                        'conditional_logic' => 0,
                        'wrapper' => array(
                            'width' => '',
                            'class' => '',
                            'id' => '',
                        ),
                        'collapsed' => '',
                        'min' => 0,
                        'max' => 0,
                        'layout' => 'table',
                        'button_label' => 'Add Record',
                        'sub_fields' => array(
                            array(
                                'key' => 'field_5fb16f1382dd9',
                                'label' => 'Record',
                                'name' => 'rm_musician_record',
                                'type' => 'file',
                                'instructions' => 'An MP3/OGG/WMA/MP4 file.',
                                'required' => 1,
                                'conditional_logic' => 0,
                                'wrapper' => array(
                                    'width' => '',
                                    'class' => '',
                                    'id' => '',
                                ),
                                'return_format' => 'array',
                                'library' => 'all',
                                'min_size' => '',
                                'max_size' => '',
                                'mime_types' => 'MP3,OGG,WMA,MP4',
                            ),
                        ),
                    ),
                ),
                'location' => array(
                    array(
                        array(
                            'param' => 'post_type',
                            'operator' => '==',
                            'value' => 'musician',
                        ),
                    ),
                ),
                'menu_order' => 2,
                'position' => 'normal',
                'style' => 'default',
                'label_placement' => 'top',
                'instruction_placement' => 'label',
                'hide_on_screen' => '',
                'active' => true,
                'description' => '',
            ));

            /**
             * The 'Settings' group.
             */
            acf_add_local_field_group(array(
                'key' => 'group_5fb1a14bb7008',
                'title' => 'Settings',
                'fields' => array(
                    array(
                        'key' => 'field_5fb1a151ae421',
                        'label' => '',
                        'name' => 'rm_radio_settings',
                        'type' => 'group',
                        'instructions' => 'There you can set some basic settings of this radio station.',
                        'required' => 0,
                        'conditional_logic' => 0,
                        'wrapper' => array(
                            'width' => '',
                            'class' => '',
                            'id' => '',
                        ),
                        'layout' => 'row',
                        'sub_fields' => array(
                            array(
                                'key' => 'field_5fb1a162ae422',
                                'label' => 'Photo duration',
                                'name' => 'rm_radio_photo_duration',
                                'type' => 'number',
                                'instructions' => 'This is the time for which one photo of the musician is displayed when playing.',
                                'required' => 0,
                                'conditional_logic' => 0,
                                'wrapper' => array(
                                    'width' => '',
                                    'class' => '',
                                    'id' => '',
                                ),
                                'default_value' => 10,
                                'placeholder' => '',
                                'prepend' => '',
                                'append' => 'seconds',
                                'min' => 0,
                                'max' => 300,
                                'step' => 1,
                            ),
                            array(
                                'key' => 'field_5fb1a2503dc8e',
                                'label' => 'Post type',
                                'name' => 'rm_radio_post_type',
                                'type' => 'select',
                                'instructions' => 'The post type to be projected when playing. Set it for specific playlist items.',
                                'required' => 0,
                                'conditional_logic' => 0,
                                'wrapper' => array(
                                    'width' => '',
                                    'class' => '',
                                    'id' => '',
                                ),
                                'choices' => array(
                                ),
                                'default_value' => false,
                                'allow_null' => 0,
                                'multiple' => 0,
                                'ui' => 0,
                                'return_format' => 'value',
                                'ajax' => 0,
                                'placeholder' => '',
                            ),
                        ),
                    ),
                ),
                'location' => array(
                    array(
                        array(
                            'param' => 'post_type',
                            'operator' => '==',
                            'value' => 'radio_station',
                        ),
                    ),
                ),
                'menu_order' => 0,
                'position' => 'normal',
                'style' => 'default',
                'label_placement' => 'top',
                'instruction_placement' => 'label',
                'hide_on_screen' => '',
                'active' => true,
                'description' => '',
            ));

            /**
             * The 'Playlist' repeater field.
             */
            acf_add_local_field_group(array(
                'key' => 'group_5fb18960680d4',
                'title' => 'Playlist',
                'fields' => array(
                    array(
                        'key' => 'field_5fb18971c2b0a',
                        'label' => '',
                        'name' => 'rm_radio_playlist',
                        'type' => 'repeater',
                        'instructions' => 'There you can manage the playlist of this radio station. The playlist is played again and again.',
                        'required' => 0,
                        'conditional_logic' => 0,
                        'wrapper' => array(
                            'width' => '',
                            'class' => '',
                            'id' => '',
                        ),
                        'collapsed' => '',
                        'min' => 0,
                        'max' => 0,
                        'layout' => 'row',
                        'button_label' => 'Add Playlist Item',
                        'sub_fields' => array(
                            array(
                                'key' => 'field_5fb18997c2b0b',
                                'label' => 'Genre',
                                'name' => 'rm_radio_genre',
                                'type' => 'taxonomy',
                                'instructions' => 'There you can set a music genre.',
                                'required' => 1,
                                'conditional_logic' => 0,
                                'wrapper' => array(
                                    'width' => '',
                                    'class' => '',
                                    'id' => '',
                                ),
                                'taxonomy' => 'genre',
                                'field_type' => 'select',
                                'allow_null' => 0,
                                'add_term' => 1,
                                'save_terms' => 0,
                                'load_terms' => 0,
                                'return_format' => 'object',
                                'multiple' => 0,
                            ),
                            array(
                                'key' => 'field_5fb18a2bc2b0c',
                                'label' => 'Number of musicians',
                                'name' => 'rm_radio_num_of_musicians',
                                'type' => 'range',
                                'instructions' => 'There you can set a number of musicians to be played.',
                                'required' => 0,
                                'conditional_logic' => 0,
                                'wrapper' => array(
                                    'width' => '',
                                    'class' => '',
                                    'id' => '',
                                ),
                                'default_value' => 1,
                                'min' => 1,
                                'max' => '',
                                'step' => '',
                                'prepend' => '',
                                'append' => 'musicians',
                            ),
                            array(
                                'key' => 'field_5fb18a75c2b0d',
                                'label' => 'Number of songs',
                                'name' => 'rm_radio_num_of_songs',
                                'type' => 'range',
                                'instructions' => 'There you can set a number of songs to be played per musician.',
                                'required' => 0,
                                'conditional_logic' => 0,
                                'wrapper' => array(
                                    'width' => '',
                                    'class' => '',
                                    'id' => '',
                                ),
                                'default_value' => 1,
                                'min' => 1,
                                'max' => '',
                                'step' => '',
                                'prepend' => '',
                                'append' => 'songs',
                            ),
                            array(
                                'key' => 'field_5fb18aa6c2b0e',
                                'label' => 'Show posts',
                                'name' => 'rm_radio_show_posts',
                                'type' => 'true_false',
                                'instructions' => 'There you can set whether the posts of the specific post type are displayed during playing this playlist item or not. You can change the post type in the settings.',
                                'required' => 0,
                                'conditional_logic' => 0,
                                'wrapper' => array(
                                    'width' => '',
                                    'class' => '',
                                    'id' => '',
                                ),
                                'message' => '',
                                'default_value' => 0,
                                'ui' => 1,
                                'ui_on_text' => 'YES',
                                'ui_off_text' => 'NO',
                            ),
                        ),
                    ),
                ),
                'location' => array(
                    array(
                        array(
                            'param' => 'post_type',
                            'operator' => '==',
                            'value' => 'radio_station',
                        ),
                    ),
                ),
                'menu_order' => 1,
                'position' => 'normal',
                'style' => 'default',
                'label_placement' => 'top',
                'instruction_placement' => 'label',
                'hide_on_screen' => '',
                'active' => true,
                'description' => '',
            ));

            /**
             * The 'Warnings' repeater field.
             */
            acf_add_local_field_group(array(
                'key' => 'group_5fb1927b0b18b',
                'title' => 'Warnings',
                'fields' => array(
                    array(
                        'key' => 'field_5fb1933b612ff',
                        'label' => '',
                        'name' => 'rm_radio_warnings',
                        'type' => 'repeater',
                        'instructions' => 'There you can add or remove some warnings of this radio station. These warnings are showing during playling.',
                        'required' => 0,
                        'conditional_logic' => 0,
                        'wrapper' => array(
                            'width' => '',
                            'class' => '',
                            'id' => '',
                        ),
                        'collapsed' => '',
                        'min' => 0,
                        'max' => 0,
                        'layout' => 'row',
                        'button_label' => 'Add Warning',
                        'sub_fields' => array(
                            array(
                                'key' => 'field_5fb193fd61300',
                                'label' => 'Active',
                                'name' => 'rm_radio_active',
                                'type' => 'true_false',
                                'instructions' => 'Set whether this warning is active or not.',
                                'required' => 0,
                                'conditional_logic' => 0,
                                'wrapper' => array(
                                    'width' => '',
                                    'class' => '',
                                    'id' => '',
                                ),
                                'message' => '',
                                'default_value' => 0,
                                'ui' => 1,
                                'ui_on_text' => 'ON',
                                'ui_off_text' => 'OFF',
                            ),
                            array(
                                'key' => 'field_5fb1954a61303',
                                'label' => 'Show to',
                                'name' => 'rm_radio_show_to',
                                'type' => 'select',
                                'instructions' => 'The user group that is supposed to see this warning.',
                                'required' => 0,
                                'conditional_logic' => 0,
                                'wrapper' => array(
                                    'width' => '',
                                    'class' => '',
                                    'id' => '',
                                ),
                                'choices' => array(
                                    'All' => 'All',
                                    'Registered' => 'Registered',
                                    'Unregistered' => 'Unregistered',
                                ),
                                'default_value' => 'All',
                                'allow_null' => 0,
                                'multiple' => 0,
                                'ui' => 0,
                                'return_format' => 'value',
                                'ajax' => 0,
                                'placeholder' => '',
                            ),
                            array(
                                'key' => 'field_5fb1945f61301',
                                'label' => 'First',
                                'name' => 'rm_radio_first',
                                'type' => 'number',
                                'instructions' => 'The first time when this warning appears (counted per musician).',
                                'required' => 0,
                                'conditional_logic' => 0,
                                'wrapper' => array(
                                    'width' => '',
                                    'class' => '',
                                    'id' => '',
                                ),
                                'default_value' => 0,
                                'placeholder' => '',
                                'prepend' => '',
                                'append' => 'musicians',
                                'min' => 0,
                                'max' => 100,
                                'step' => 1,
                            ),
                            array(
                                'key' => 'field_5fb194e561302',
                                'label' => 'Step',
                                'name' => 'rm_radio_step',
                                'type' => 'number',
                                'instructions' => 'The regular step between the last time and the next time this warning appears (counted per musician).',
                                'required' => 0,
                                'conditional_logic' => 0,
                                'wrapper' => array(
                                    'width' => '',
                                    'class' => '',
                                    'id' => '',
                                ),
                                'default_value' => 0,
                                'placeholder' => '',
                                'prepend' => '',
                                'append' => 'musicians',
                                'min' => 0,
                                'max' => 100,
                                'step' => 1,
                            ),
                            array(
                                'key' => 'field_5fb197f561304',
                                'label' => 'Title',
                                'name' => 'rm_radio_title',
                                'type' => 'text',
                                'instructions' => 'The title of this warning.',
                                'required' => 0,
                                'conditional_logic' => 0,
                                'wrapper' => array(
                                    'width' => '',
                                    'class' => '',
                                    'id' => '',
                                ),
                                'default_value' => '',
                                'placeholder' => '',
                                'prepend' => '',
                                'append' => '',
                                'maxlength' => '',
                            ),
                            array(
                                'key' => 'field_5fb1983261305',
                                'label' => 'Message',
                                'name' => 'rm_radio_message',
                                'type' => 'textarea',
                                'instructions' => 'The message of this warning.',
                                'required' => 1,
                                'conditional_logic' => 0,
                                'wrapper' => array(
                                    'width' => '',
                                    'class' => '',
                                    'id' => '',
                                ),
                                'default_value' => '',
                                'placeholder' => '',
                                'maxlength' => '',
                                'rows' => '',
                                'new_lines' => 'br',
                            ),
                            array(
                                'key' => 'field_5fb1986f61306',
                                'label' => 'Button text',
                                'name' => 'rm_radio_button_text',
                                'type' => 'text',
                                'instructions' => 'The text of the button.',
                                'required' => 0,
                                'conditional_logic' => 0,
                                'wrapper' => array(
                                    'width' => '',
                                    'class' => '',
                                    'id' => '',
                                ),
                                'default_value' => 'OK',
                                'placeholder' => '',
                                'prepend' => '',
                                'append' => '',
                                'maxlength' => '',
                            ),
                            array(
                                'key' => 'field_5fb1989661307',
                                'label' => 'Button link',
                                'name' => 'rm_radio_button_link',
                                'type' => 'url',
                                'instructions' => 'The URL link of the button.',
                                'required' => 0,
                                'conditional_logic' => 0,
                                'wrapper' => array(
                                    'width' => '',
                                    'class' => '',
                                    'id' => '',
                                ),
                                'default_value' => '',
                                'placeholder' => '',
                            ),
                        ),
                    ),
                ),
                'location' => array(
                    array(
                        array(
                            'param' => 'post_type',
                            'operator' => '==',
                            'value' => 'radio_station',
                        ),
                    ),
                ),
                'menu_order' => 2,
                'position' => 'normal',
                'style' => 'default',
                'label_placement' => 'top',
                'instruction_placement' => 'label',
                'hide_on_screen' => '',
                'active' => true,
                'description' => '',
            ));
        } // if
    } // CREATE REPEATER FIELDS
} // RM REPEATER FIELD CREATOR

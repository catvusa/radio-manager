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
     * The ADVANCED CUSTOM FIELDS plugin including the REPEATER FIELD add-on must be installed.
     */
    public static function createRepeaterFields()
    {
        if ( function_exists( 'acf_add_local_field_group' ) )
        {
            /**
             * The 'Images' repeater field.
             */
            acf_add_local_field_group( array(
                'key' => 'group_5f8e8585a608f',
                'title' => 'Images',
                'fields' => array(
                    array(
                        'key' => 'field_5f8e85979b882',
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
                        'button_label' => '',
                        'sub_fields' => array(
                            array(
                                'key' => 'field_5f8e86719b883',
                                'label' => 'Image',
                                'name' => 'rm_musician_image',
                                'type' => 'image',
                                'instructions' => '',
                                'required' => 0,
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
                                'mime_types' => '',
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
             * The 'Music' repeater field.
             */
            acf_add_local_field_group( array(
                'key' => 'group_5f930abc2eeb2',
                'title' => 'Music',
                'fields' => array(
                    array(
                        'key' => 'field_5f9308c0c52d1',
                        'label' => 'Introductions',
                        'name' => 'rm_musician_introductions',
                        'type' => 'repeater',
                        'instructions' => 'There you can add or remove some introductions of the musician. These introductions are being played before the records.',
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
                        'button_label' => '',
                        'sub_fields' => array(
                            array(
                                'key' => 'field_5f9308c0c6d36',
                                'label' => 'Introduction',
                                'name' => 'rm_musician_introduction',
                                'type' => 'file',
                                'instructions' => 'The MP3/MP4/WMA/OGG file of the introduction.',
                                'required' => 0,
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
                                'mime_types' => 'mp3, ogg, wma, mp4',
                            ),
                        ),
                    ),
                    array(
                        'key' => 'field_5f930abc33ebc',
                        'label' => 'Records',
                        'name' => 'rm_musician_records',
                        'type' => 'repeater',
                        'instructions' => 'There you can add or remove some records of the musician.',
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
                        'button_label' => '',
                        'sub_fields' => array(
                            array(
                                'key' => 'field_5f930abc35f53',
                                'label' => 'Record',
                                'name' => 'rm_musician_record_file',
                                'type' => 'file',
                                'instructions' => 'The MP3/MP4/WMA/OGG file of the record.',
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
                                'mime_types' => 'mp3, mp4, wma, ogg',
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
             * The 'Playlist' repeater field.
             */
            acf_add_local_field_group( array(
                'key' => 'group_5f907bd5175ae',
                'title' => 'Playlist',
                'fields' => array(
                    array(
                        'key' => 'field_5f907bd51e351',
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
                        'min' => 1,
                        'max' => 0,
                        'layout' => 'table',
                        'button_label' => '',
                        'sub_fields' => array(
                            array(
                                'key' => 'field_5f907c79668fa',
                                'label' => 'Genre',
                                'name' => 'rm_radio_genre',
                                'type' => 'taxonomy',
                                'instructions' => 'There you can set a genre of music.',
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
                                'return_format' => 'id',
                                'multiple' => 0,
                            ),
                            array(
                                'key' => 'field_5f907cb5668fb',
                                'label' => 'Number of musicians',
                                'name' => 'rm_radio_num_of_musicians',
                                'type' => 'range',
                                'instructions' => 'There you can set a number of musicians to be played.',
                                'required' => 1,
                                'conditional_logic' => 0,
                                'wrapper' => array(
                                    'width' => '',
                                    'class' => '',
                                    'id' => '',
                                ),
                                'default_value' => '',
                                'min' => 1,
                                'max' => 9,
                                'step' => 1,
                                'prepend' => '',
                                'append' => 'musicians',
                            ),
                            array(
                                'key' => 'field_5f907d69668fc',
                                'label' => 'Number of songs',
                                'name' => 'rm_radio_num_of_songs',
                                'type' => 'range',
                                'instructions' => 'There you can set a number of songs to be played per interpret.',
                                'required' => 1,
                                'conditional_logic' => 0,
                                'wrapper' => array(
                                    'width' => '',
                                    'class' => '',
                                    'id' => '',
                                ),
                                'default_value' => '',
                                'min' => 1,
                                'max' => 9,
                                'step' => 1,
                                'prepend' => '',
                                'append' => 'songs',
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
             * The 'Settings' repeater field.
             */
            acf_add_local_field_group( array(
                'key' => 'group_5f908d8a7b0e2',
                'title' => 'Settings',
                'fields' => array(
                    array(
                        'key' => 'field_5f908d8a7ef7d',
                        'label' => 'Basic settings',
                        'name' => 'rm_radio_basic_settings',
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
                                'key' => 'field_5f908d8a805f0',
                                'label' => 'Photo Duration',
                                'name' => 'rm_radio_photo_duration',
                                'type' => 'number',
                                'instructions' => 'This is the time for which one photo of the musician is displayed when playing.',
                                'required' => 1,
                                'conditional_logic' => 0,
                                'wrapper' => array(
                                    'width' => '',
                                    'class' => '',
                                    'id' => '',
                                ),
                                'default_value' => '',
                                'placeholder' => '',
                                'prepend' => '',
                                'append' => 'seconds',
                                'min' => 0,
                                'max' => 60,
                                'step' => '',
                            ),
                            array(
                                'key' => 'field_5f908d8a80628',
                                'label' => 'Post Type',
                                'name' => 'rm_radio_post_type',
                                'type' => 'select',
                                'instructions' => 'The post type to be projected if the musician has no images nor information.',
                                'required' => 1,
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
                    array(
                        'key' => 'field_5f8ec99bdd342',
                        'label' => 'Membership warning',
                        'name' => 'rm_radio_membership_warning',
                        'type' => 'group',
                        'instructions' => 'There you can set the membership warning.',
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
                                'key' => 'field_5f94880b89861',
                                'label' => 'Active',
                                'name' => 'rm_radio_membership_active',
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
                                'key' => 'field_5f9486988985a',
                                'label' => 'First',
                                'name' => 'rm_radio_membership_first',
                                'type' => 'number',
                                'instructions' => 'The first time when this warning appears (counted per musician).',
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
                                'append' => 'musicians',
                                'min' => 0,
                                'max' => '',
                                'step' => '',
                            ),
                            array(
                                'key' => 'field_5f9487158985c',
                                'label' => 'Step',
                                'name' => 'rm_radio_membership_step',
                                'type' => 'number',
                                'instructions' => 'The regular step between the last time and the next time this warning appears (counted per musician).',
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
                                'append' => 'musicians',
                                'min' => '',
                                'max' => '',
                                'step' => '',
                            ),
                            array(
                                'key' => 'field_5f9487308985d',
                                'label' => 'Title',
                                'name' => 'rm_radio_membership_title',
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
                                'key' => 'field_5f9487618985e',
                                'label' => 'Message',
                                'name' => 'rm_radio_membership_message',
                                'type' => 'textarea',
                                'instructions' => 'The message of this warning.',
                                'required' => 0,
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
                                'new_lines' => '',
                            ),
                            array(
                                'key' => 'field_5f94877f8985f',
                                'label' => 'Button text',
                                'name' => 'rm_radio_membership_button_text',
                                'type' => 'text',
                                'instructions' => 'The text of the button.',
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
                                'key' => 'field_5f9487a489860',
                                'label' => 'Button link',
                                'name' => 'rm_radio_membership_button_link',
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
                    array(
                        'key' => 'field_5f99a64f0697c',
                        'label' => 'Streaming warning',
                        'name' => 'rm_radio_streaming_warning',
                        'type' => 'group',
                        'instructions' => 'There you can set the streaming warning.',
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
                                'key' => 'field_5f99a64f0697d',
                                'label' => 'Active',
                                'name' => 'rm_radio_streaming_active',
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
                                'key' => 'field_5f99a64f0697e',
                                'label' => 'First',
                                'name' => 'rm_radio_streaming_first',
                                'type' => 'number',
                                'instructions' => 'The first time when this warning appears (counted per musician).',
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
                                'append' => 'musicians',
                                'min' => 0,
                                'max' => '',
                                'step' => '',
                            ),
                            array(
                                'key' => 'field_5f99a64f0697f',
                                'label' => 'Step',
                                'name' => 'rm_radio_streaming_step',
                                'type' => 'number',
                                'instructions' => 'The regular step between the last time and the next time this warning appears (counted per musician).',
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
                                'append' => 'musicians',
                                'min' => '',
                                'max' => '',
                                'step' => '',
                            ),
                            array(
                                'key' => 'field_5f99a64f06980',
                                'label' => 'Title',
                                'name' => 'rm_radio_streaming_title',
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
                                'key' => 'field_5f99a64f06981',
                                'label' => 'Message',
                                'name' => 'rm_radio_streaming_message',
                                'type' => 'textarea',
                                'instructions' => 'The message of this warning.',
                                'required' => 0,
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
                                'new_lines' => '',
                            ),
                            array(
                                'key' => 'field_5f99a64f06982',
                                'label' => 'Button text',
                                'name' => 'rm_radio_streaming_button_text',
                                'type' => 'text',
                                'instructions' => 'The text of the button.',
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
                                'key' => 'field_5f99a64f06983',
                                'label' => 'Button link',
                                'name' => 'rm_radio_streaming_button_link',
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
                'menu_order' => 0,
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

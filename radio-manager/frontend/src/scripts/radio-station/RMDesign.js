/**
 * This class is used for creating
 * HTML of the radio station.
 */
export default class RMHTML
{
	constructor( wrapper )
  {
		this._wrapper = document.getElementById( wrapper )
  } // CONSTRUCTOR

  createElement( tag, id, parent )
  {
    let element = document.createElement( tag );
    element.id = id;
    parent.appendChild( element );

		return element
  } // CREATE ELEMENT

	// ========================================
	// RADIO STATION
	// ========================================
    
  createHTML()
  {
		this._radioNameField = createElement( "div", "rm-radio-name-field", this._wrapper )
		this.createRadioNameFieldContent( this._radioNameField )

		this._musicianMultimediaField = createElement( "div", "rm-musician-multimedia-field", this._wrapper )
		this.createMusicianMultimediaFieldContent( this._musicianMultimediaField )

		this._radioPlayerField = createElement( "div", "rm-radio-player-field", this._wrapper )
		this.createRadioPlayerFieldContent( this._radioPlayerField )

		this._musicianDescriptionField = createElement( "div", "rm-musician-description-field", this._wrapper )
		this.createMusicianDescriptionFieldContent( this._musicianDescriptionField )
  } // CREATE HTML

	// ========================================
	// 1. RADIO NAME PART
	// ========================================

	createRadioNameFieldContent( parent )
  {
    this._radioName = createElement( "span", "rm-radio-name", parent )
  } // CREATE RADIO NAME FIELD CONTENT

	// ========================================
	// 2. MUSICIAN MULTIMEDIA PART
	// ========================================

	createMusicianMultimediaFieldContent( parent )
	{
		this._musicianImage = createElement( "img", "rm-musician-image", parent )
	} // CREATE MUSICIAN MULTIMEDIA FIELD CONTENT

	// ========================================
	// 3. RADIO PLAYER PART
	// ========================================

	createRadioPlayerFieldContent( parent )
	{
		this._leftIconField = createElement( "span", "rm-left-field", parent )
		this.createLeftIconFieldContent( this._leftIconField )

		this._middleInformationField = createElement( "span", "rm-middle-field", parent )
		this.createMiddleInformationFieldContent( this._middleInformationField )

		this._rightIconField = createElement( "span", "rm-right-field", parent )
		this.createRightIconFieldContent( this._rightIconField )
	} // CREATE RADIO PLAYER FIELD CONTENT

	createLeftIconFieldContent( parent )
  {
		this._leftIcon = createElement( "img", "rm-left-icon", parent )
  } // CREATE LEFT ICON FIELD CONTENT

	createMiddleInformationFieldContent( parent )
  {
		this._musicianNameField = createElement( "span", "rm-musician-name-field", parent )
		this.createMusicianNameFieldContent( this._musicianNameField )

		this._recordNameField = createElement( "span", "rm-record-name-field", parent )
		this.createRecordNameFieldContent( this._recordNameField )
  } // CREATE MIDDLE INFORMATION FIELD CONTENT

	createMusicianNameFieldContent( parent )
  {
		this._musicianNameLabel = createElement( "span", "rm-musician-name-label", parent )
		this._musicianName = createElement( "span", "rm-musician-name", parent )
  } // CREATE MUSICIAN NAME FIELD CONTENT

	createRecordNameFieldContent( parent )
  {
		this._recordNameLabel = createElement( "span", "rm-record-name-label", parent )
		this._recordName = createElement( "span", "rm-record-name", parent )
  } // CREATE RECORD NAME FIELD CONTENT

	createRightIconFieldContent( parent )
  {
		this._rightIcon = createElement( "img", "rm-right-icon", parent )
  } // CREATE RIGHT ICON FIELD CONTENT

	// ========================================
	// 4. MUSICIAN DESCRIPTION PART
	// ========================================

	createMusicianDescriptionFieldContent( parent )
	{
		this._musicianDescriptionGradient = createElement( "div", "rm-musician-description-gradient", parent )
		this._musicianDescription = createElement( "div", "rm-musician-description", parent )
	} // CREATE MUSICIAN DESCRIPTION FIELD CONTENT

	// ========================================
	// EVENT LISTENERS
	// ========================================

  import Plyr from "plyr";

      // Set the player
    this._player = new Plyr(
    document.getElementById( "rm-radio-player" ),
    {
    controls: [
    "progress",
    ],
    },
    );
    this._player.on( "ended", () => {
    this.play();
    } );

  /*


	<div>
	<audio id="rm-radio-player"></audio>
	</div>
 
 */

const ICON_PLAY = "http://www.testcatv.site/wp-content/uploads/2020/11/play.svg";
const ICON_PAUSE = "http://www.testcatv.site/wp-content/uploads/2020/11/pause.svg";
const ICON_UP = "http://www.testcatv.site/wp-content/uploads/2020/11/up.svg";
const ICON_DOWN = "http://www.testcatv.site/wp-content/uploads/2020/11/down.svg";

    /**
     * Add listeners for all important parts of the radio station (e.g. play/pause button)
     */
    addEventListeners()
    {
        // Create a callback for the play/pause button and the musician image
        let playbackCallback = () =>
        {
            if ( leftIcon.getAttribute( "data-src" ) == ICON_PLAY )
            {
                this._player.play();
                
                leftIcon.src = ICON_PAUSE;
                leftIcon.setAttribute( "data-src", ICON_PAUSE );
                
                leftField.style.backgroundColor = "#C01302";
            } // if
            else
            {
                this._player.pause();
                
                leftIcon.src = ICON_PLAY;
                leftIcon.setAttribute( "data-src", ICON_PLAY );
                
                leftField.style.backgroundColor = "";
            } // else
        };
        
        // ========================================
        
        // Set the play/pause button
        let leftIcon = document.getElementById( "rm-left-icon" );
        let leftField = document.getElementById( "rm-left-field" );
        
        leftIcon.src = ICON_PLAY;
        leftIcon.setAttribute( "data-src", ICON_PLAY );
        
        leftIcon.addEventListener( "click", playbackCallback );
        
        // ========================================
        
        // Set the musician image
        let musicianImage = document.getElementById( "rm-musician-image" );
        
        musicianImage.addEventListener( "click", playbackCallback );
        
        // ========================================
        
        // Set the expand/collapse button
        let rightIcon = document.getElementById( "rm-right-icon" );
        let rightField = document.getElementById( "rm-right-field" );
        
        let descriptionField = document.getElementById( "rm-musician-description-field" );
        let descriptionGradient = document.getElementById( "rm-musician-description-gradient" );
        
        rightIcon.src = ICON_DOWN;
        rightIcon.setAttribute( "data-src", ICON_DOWN );
        
        rightIcon.addEventListener( "click", () =>
        {
            if ( rightIcon.getAttribute( "data-src" ) == ICON_UP )
            {
                descriptionField.style.height = "";
                descriptionGradient.style.display = "block";

                rightIcon.src = ICON_DOWN;
                rightIcon.setAttribute( "data-src", ICON_DOWN );
                
                rightField.style.backgroundColor = "";
            } // if
            else
            {
                descriptionField.style.height = "auto";
                descriptionGradient.style.display = "none";
                
                rightIcon.src = ICON_UP;
                rightIcon.setAttribute( "data-src", ICON_UP );
                
                rightField.style.backgroundColor = "#C01302";
            } // else
        } );
    } // ADD EVENT LISTENERS




    /**
     * Set the radio name to HTML.
     */
    setRadioName( radioName )
    {
        document.getElementById( "rm-radio-name" ).innerHTML = radioName;
    } // SET RADIO NAME

    /**
     * Set the slideshow of the musician images.
     */
    setSlideshow( musician )
    {
        if ( musician.hasImages() > 1 )
        {
            // Set the first musician image to slideshow
            this.setMusicianImage( musician.randomImage.url );
            
            // Start the slideshow of the musician images
            this._slideshow = setInterval(() =>
            {
                // Set the musician image
                this.setMusicianImage( musician.randomImage.url );
            }, this._imgDuration * 1000);
            
            return true;
        } // if
        else if ( musician.hasImages() == 1 )
        {
            // Set the only one musician image
            this.setMusicianImage( musician.randomImage.url );
            
            return false;
        } // else if
        else
        {
            // Set the radio station logo
            this.setMusicianImage( this._logo );
            
            return false;
        } // else
    } // SET SLIDESHOW

    /**
     * Set the musician image to HTML.
     */
    setMusicianImage( musicianImage )
    {
        document.getElementById( "rm-musician-image" ).src = musicianImage;
    } // SET MUSICIAN IMAGE

    /**
     * Set the musician name to HTML.
     */
    setMusicianName( musicianName )
    {
        document.getElementById( "rm-musician-name" ).innerHTML = musicianName;
    } // SET MUSICIAN NAME
    
    /**
     * Set the musician record to the player.
     */
    setMusicianRecord( musician )
    {
        // There is at least one record by this musician
        if ( musician.hasRecords() )
        {
            // Choose one record randomly
            let record = musician.randomRecord;
            
            // Set the record to be played
            this._player.source = {
                type: "audio",
                sources: [
                    {
                        src: record.url,
                    },
                ],
            };
            
            // Set the record name to HTML
            this.setRecordName( record.title );
            
            return true;
        } // if
        
        return false;
    } // SET MUSICIAN RECORD

    /**
     * Set the musician introduction to the player.
     */
    setMusicianIntroduction( musician )
    {
        // There is at least one introduction by this musician
        if ( musician.hasIntroductions() )
        {
            // Set the introduction to be played
            this._player.source = {
                type: "audio",
                sources: [
                    {
                        src: musician.randomIntroduction.url,
                    },
                ],
            };
            
            // Clear all the data
            this.setMusicianImage( this._logo );
            this.setMusicianName( "" );
            this.setRecordName( "" );
            this.setMusicianDescription( "" );
            
            return true;
        } // if
        
        return false;
    } // SET MUSICIAN INTRODUCTION

    /**
     * Set the record name to HTML.
     */
    setRecordName( recordName )
    {
        document.getElementById( "rm-record-name" ).innerHTML = recordName;
    } // SET RECORD NAME

    /**
     * Set the musician description to HTML.
     */
    setMusicianDescription( musicianDescription )
    {
        let descriptionField = document.getElementById( "rm-musician-description-field" );
        let descriptionGradient = document.getElementById( "rm-musician-description-gradient" );
        
        let rightIcon = document.getElementById( "rm-right-icon" );
        let rightField = document.getElementById( "rm-right-field" );
        
        // Reset the right icon
        rightIcon.src = ICON_DOWN;
        rightIcon.setAttribute( "data-src", ICON_DOWN );
        rightField.style.backgroundColor = "";
        
        // Check the length of the text
        if ( musicianDescription.length == 0 )
        {
            descriptionField.style.display = "none";
            rightField.style.visibility = "hidden";
        } // if
        else if ( musicianDescription.length > 200 )
        {
            descriptionField.style.display = "block";
            descriptionField.style.height = "";
            descriptionGradient.style.display = "block";
            rightField.style.visibility = "visible";
        } // else if
        else
        {
            descriptionField.style.display = "block";
            descriptionField.style.height = "auto";
            descriptionGradient.style.display = "none";
            rightField.style.visibility = "hidden";
        } // else
        
        // Insert the text into the musician description
        document.getElementById( "rm-musician-description" ).innerHTML = musicianDescription;
    } // SET MUSICIAN DESCRIPTION


} // RM HTML

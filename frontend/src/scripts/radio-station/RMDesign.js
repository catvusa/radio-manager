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


  /*


	<div>
	<audio id="rm-radio-player"></audio>
	</div>
 
 */



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


} // RM HTML

const express = require('plyr');
 
const player = new Plyr('#player', {
	title: 'Example Title',
	controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume'],
});
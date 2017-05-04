/* global $ */


$( function () {
  'use strict';
  $( '.hero-product' ).hammer( {
    direction: Hammer.DIRECTION_HORIZONTAL
  } ).bind( 'swipe', function ( evt ) {
    var direction = evt.gesture.direction;
    if ( direction === Hammer.DIRECTION_LEFT ) {
      console.log( 'left' )
    } else if ( direction === Hammer.DIRECTION_RIGHT ) {
      console.log( 'right' )
    }
  } )
} );

/* global $ */

$( function () {
  'use strict';
  var isActive = false;
  var slidingCopy = $( '.product-row .column-copy' );
  var slidingProduct = $( '.product-row .column-product' );
  var slidingBrowser = $( '.product-row .column-product .product-browser' );


  $( '.product-row .column-product' ).click( function ( evt ) {
    evt.preventDefault();
    if ( isActive ) {
      slidingProduct.removeClass( 'active' );
      slidingCopy.removeClass( 'active' );
      slidingProduct.css( 'margin-right', 0 );
      isActive = false;
    } else {
      slidingProduct.addClass( 'active' );
      slidingCopy.addClass( 'active' );
      // slidingProduct.velocity( {
      //   'margin-right': slidingBrowser.width() / 2
      // } );
      isActive = true;
    }
  } );
} );

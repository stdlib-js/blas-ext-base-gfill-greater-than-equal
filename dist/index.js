/** @license Apache-2.0 */

'use strict';

/**
* Replace strided array elements greater than or equal to a provided search element with a specified scalar constant.
*
* @module @stdlib/blas-ext-base-gfill-greater-than-equal
*
* @example
* var gfillGreaterThanEqual = require( '@stdlib/blas-ext-base-gfill-greater-than-equal' );
*
* var x = [ 1.0, 1.0, 0.0, 1.0 ];
*
* gfillGreaterThanEqual( x.length, 1.0, 5.0, x, 1 );
* // x => [ 5.0, 5.0, 0.0, 5.0 ]
*
* @example
* var gfillGreaterThanEqual = require( '@stdlib/blas-ext-base-gfill-greater-than-equal' );
*
* var x = [ 1.0, 1.0, 0.0, 1.0 ];
*
* gfillGreaterThanEqual.ndarray( x.length, 1.0, 5.0, x, 1, 0 );
* // x => [ 5.0, 5.0, 0.0, 5.0 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property/dist' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;

var assert = require('assert');

var ___ = undefined;

/*
 * To complete the exercise, replace underscores in the 
 * code below with appropriate values to make the tests 
 * pass.
 * 
 * See README.md for installing the test library and 
 * running the tests.
 */


describe("Arrays", function(){
 	
 	it("can be defined", function(){
 		assert( ___ instanceof Array);
 	});
 	
 	it("have a length", function(){
 		var arr = [];
 		assert.strictEqual(arr.length, ___);
 	});

 	it("can be accessed using the index notation", function(){
 		var arr = ["hello", 42, "Blueberry pie", [6, 7]];
 		assert.strictEqual(arr[0], ___);
 		assert.strictEqual(arr[1], ___);
 		assert.strictEqual(arr[2], ___);
 		assert.strictEqual(arr[3], ___);
 	});

 	it("can be nested inside each other", function(){
 		var arr2D = [
 			['a1', 'b1', 'c1'],
 			['a2', 'b2', 'c2'],
 			['a3', 'b3', 'c3']
 		];
 		assert.strictEqual(arr2D[0][0], ___);
 		assert.strictEqual(arr2D[2][2], ___);
 		assert.strictEqual(arr2D[0][2], ___);
 		assert.strictEqual(arr2D[2][0], ___);
 	});

 	it("can have an element added using 'push()'", function(){
 		var arr = [1,2,3];
 		arr.push("Gooseberry");
 		assert.deepStrictEqual(arr, ___);
 	});

 	it("can have an element removed using 'pop()'", function(){
 		var arr = [1,2,3];
 		arr.pop();
 		assert.deepStrictEqual(arr, ___);
 	});
 });



describe("The for loop", function(){
	it("will do something a number of times", function(){
		var xs = [];
		for ( var x = 0; x < 10; x++){
			xs.push(x);
		}
		assert.deepStrictEqual(xs, ___);
	});

	it("has an initialiser expression", function(){
		var xs = [];
		for ( var x = 5; x < 10; x++){
			xs.push(x);
		}
		assert.deepStrictEqual(xs, ___);
	});

	it("has a loop condition", function(){
		var xs = [];
		for ( var x = 5; x < 12; x++){
			xs.push(x);
		}
		assert.deepStrictEqual(xs, ___);
	});

	it("has an update expression", function(){
		var xs = [];
		for ( var x = 5; x < 12; x=x+2){
			xs.push(x);
		}
		assert.deepStrictEqual(xs, ___);
	});
	
	it("can get quite complex", function(){
		// This is horrible :-) 
		//
		// However, once you can complete this test, 
		// for loops will no longer hold any mysteries for you.
		//
		// Try to go through it on paper with a column for each 
		// variable and the loop condition.
		// 
		// If you can't do it, don't worry we'll go through it 
		// together on the whiteboard
		var xs = [];
		for(var i=3, j=5; i<20 && j>0; i=j+i, j=(j+i)/2 ){
			xs.push([i,j]);
		}
		assert.deepStrictEqual(xs, ___);
	});
	
});

describe("Array iteration", function(){
	// Note that in most of these examples, using map
	// would have been clearer. That's okay though, we 
	// are doing this to learn about arrays and looping.
	// I'd expect to see arr.map(function(e){...}) in
	// production code to solve the same problems though.
	//
	// TL;DR – Don't worry about this comment.

	it("can be done with a for loop", function(){
		var arr = [1,2,3,4,5];
		var xs = [];
		for (var i = 0; i < arr.length; i++){
			xs.push(arr[i]*arr[i]);
		}
		assert.deepStrictEqual(xs, ___);
	});

	it("can be done backwards", function(){
		var arr = [1,2,3,4,5];
		var xs = [];
		for (var i = ___; i >= 0; i--){
			xs.push(arr[i]);
		}
		assert.deepStrictEqual(xs, [5,4,3,2,1]);
	});

	it("can be done only for every other number", function(){
		var arr = [1,2,3,4,5];
		var xs = [];
		for (var i = 0; i < arr.length; i=___){
			xs.push(arr[i]);
		}
		assert.deepStrictEqual(xs, [1,3,5]);
	});
	
	it("can be done using the Array's forEach method", function(){
		var arr = [1,2,3,4,5];
		var xs = [];
		
		arr.forEach(function(element){
			___;
		});

		assert.deepStrictEqual(xs, [3,5,6,7,8]);
	});

});








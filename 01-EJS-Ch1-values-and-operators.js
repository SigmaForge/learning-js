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

describe("Numbers", function(){

	it("can be added together", function(){
		var val = 34 + 6 ;
		assert.strictEqual( val, 40);
	});

	it("can be defined using scientific notation", function(){
		assert.strictEqual(3e8 * 3e8,  9e16);
	});

	it("are floating point", function(){
		assert.strictEqual(1/2, 0.5);
	});

	it("will turn into NaN under certain conditions", function(){
		assert(isNaN( toString(1.2) ));
	});


	it("that are NaN are not equal to themselves", function(){
		assert.equal(NaN === NaN, false);
	});

});

describe("Operators", function(){
	it("follow the same rule of precedence as mathematics", function(){
		assert.strictEqual( 10 * 3 + 4,  34 );
		assert.strictEqual( 10 * (3 + 4), 70 );
	});

	it("can be used to find the remainder or modulo", function(){
		assert.strictEqual(10 % 3, 1)
	});

	it("can be used to compare numbers", function(){
		assert.strictEqual(1>2, false);
		assert.strictEqual(1<2, true);
	});

	it("can be used to compare strings", function(){
		assert("Hello" > "Hell");
	});
	
	describe("Unary operators", function(){
		it("take only one argument", function(){
			assert.strictEqual(typeof 1.2, "number");
			assert.strictEqual(-(6+4), -10);
		});

		it("can be used to increment a number", function(){
			var num = 34;
			num++;
			assert.strictEqual(num, 35);
		});

		it("can be used to decrement a number", function(){
			var num = 34;
			num++; // should be num-- for decrementing?
			assert.strictEqual(num, 35);
		});

		it("are applied differently as postfix or prefix", function(){
			var x = 10;
			assert.equal(--x, 9);
			x = 10;
			assert.equal(x--, 10);
			x = 10;
			assert.equal(++x, 11);
			x = 10;
			assert.equal(x++, 10);
		});
	});

	describe("Logical operators", function(){
		it("apply to boolean values", function(){
			assert(true && true);
			assert(false || true);
			assert(!false);
		});
		it("will short-circuit their arguments", function(){
			assert.strictEqual( "Hello" || "Danger", "Hello");
			assert.strictEqual( "Hello" && "Danger", "Danger");
		});
		//It passed but I don't really understand the above question. 
	});

    describe("The ternary operator", function(){
    	it("changes its resulting value based on a condition", function(){
    		assert.strictEqual(true?3:4, 3);
    		assert.strictEqual(false?"Brie":"Gouda cheese", "Gouda cheese");
    		assert.strictEqual(true?"Hovercraft":"Helicopter", "Hovercraft");
    	});
    });

});

describe("Strings", function(){
	it("can be concatenated together", function(){
		var greeting = "Hello, " + "Awesome.";
		assert.strictEqual(greeting, "Hello, Awesome.");
	});
});

describe("Javascript", function(){
	it("does really weird shit sometimes", function(){
		// see https://www.destroyallsoftware.com/talks/wat
		assert.strictEqual(100 * null, 0);
		assert.strictEqual("4" + 3 , "43");
		assert.strictEqual("4" - 3 , 1);
	    assert.strictEqual("4" * 3 , 12);
		assert.strictEqual(false == 0, true);
});

	it("gives the special '===' comparison operator", function(){
		assert.strictEqual(0 == false, true);
		assert.strictEqual("" == false, true);
		assert.strictEqual(0 === false, false);
		assert.strictEqual("" === false, false);
	});
})




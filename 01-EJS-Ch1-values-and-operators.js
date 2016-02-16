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
		var val = 34 + ___ ;
		assert.strictEqual( val, 40);
	});

	it("can be defined using scientific notation", function(){
		assert.strictEqual(3e8 * 3e8,  ___);
	});

	it("are floating point", function(){
		assert.strictEqual(1/2, ___);
	});

	it("will turn into NaN under certain conditions", function(){
		assert(isNaN( 1.2 ));
	});

	it("that are NaN are not equal to themselves", function(){
		assert.equal(NaN === NaN, ___);
	});

});

describe("Operators", function(){
	it("follow the same rule of precedence as mathematics", function(){
		assert.strictEqual( 10 * 3 + 4,  ___ );
		assert.strictEqual( 10 * (3 + 4), ___ );
	});

	it("can be used to find the remainder or modulo", function(){
		assert.strictEqual(10 % 3, ___)
	});

	it("can be used to compare numbers", function(){
		assert.strictEqual(1>2, ___);
		assert.strictEqual(1<2, ___);
	});

	it("can be used to compare strings", function(){
		assert("Hello" > ___);
	});
	
	describe("Unary operators", function(){
		it("take only one argument", function(){
			assert.strictEqual(typeof 1.2, ___);
			assert.strictEqual(-(6+4), ___);
		});

		it("can be used to increment a number", function(){
			var num = 34;
			num++;
			assert.strictEqual(num, ___);
		});

		it("can be used to decrement a number", function(){
			var num = 34;
			num++;
			assert.strictEqual(num, ___);
		});

		it("are applied differently as postfix or prefix", function(){
			var x = 10;
			assert.equal(--x, ___);
			x = 10;
			assert.equal(x--, ___);
			x = 10;
			assert.equal(++x, ___);
			x = 10;
			assert.equal(x++, ___);
		});
	});

	describe("Logical operators", function(){
		it("apply to boolean values", function(){
			assert(true && ___);
			assert(false || ___);
			assert(!___);
		});
		it("will short-circuit their arguments", function(){
			assert.strictEqual( "Hello" || "Danger", ___);
			assert.strictEqual( "Hello" && "Danger", ___);
		});
	});

    describe("The ternary operator", function(){
    	it("changes its resulting value based on a condition", function(){
    		assert.strictEqual(___?3:4, 3);
    		assert.strictEqual(false?"Brie":___, "Gouda cheese");
    		assert.strictEqual(true?___:"Helicopter", "Hovercraft");
    	});
    });

});

describe("Strings", function(){
	it("can be concatenated together", function(){
		var greeting = "Hello, " + ___;
		assert.strictEqual(greeting, "Hello, Awesome.");
	});
});

describe("Javascript", function(){
	it("does really weird shit sometimes", function(){
		// see https://www.destroyallsoftware.com/talks/wat
		assert.strictEqual(100 * null, ___);
		assert.strictEqual("4" + 3 , ___);
		assert.strictEqual("4" - 3 , ___);
	    assert.strictEqual("4" * 3 , ___);
		assert.strictEqual(false == 0, ___);
	});

	it("gives the special '===' comparison operator", function(){
		assert.strictEqual(0 == false, ___);
		assert.strictEqual("" == false, ___);
		assert.strictEqual(0 === false, ___);
		assert.strictEqual("" === false, ___);
	});
})




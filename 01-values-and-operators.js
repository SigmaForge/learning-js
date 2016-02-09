var assert = require('assert');

var _ = undefined;

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
		var val = 34 + _ ;
		assert.strictEqual( val, 40);
	});

	it("can be defined using scientific notation", function(){
		assert.strictEqual(3e8 * 3e8,  _);
	});

	it("are floating point", function(){
		assert.strictEqual(1/2, _);
	});

	it("will turn into NaN under certain conditions", function(){
		assert(isNaN( 1.2 ));
	});

	it("that are NaN are not equal to themselves", function(){
		assert.equal(NaN === NaN, _);
	});

});

describe("Operators", function(){
	it("follow the same rule of precedence as mathematics", function(){
		assert.strictEqual( 10 * 3 + 4,  _ );
		assert.strictEqual( 10 * (3 + 4), _ );
	});

	it("can be used to find the remainder or modulo", function(){
		assert.strictEqual(10 % 3, _)
	});

	it("can be used to compare numbers", function(){
		assert.strictEqual(1>2, _);
		assert.strictEqual(1<2, _);
	});

	it("can be used to compare strings", function(){
		assert("Hello" > _);
	});
	
	describe("Unary operators", function(){
		it("take only one argument", function(){
			assert.strictEqual(typeof 1.2, _);
			assert.strictEqual(-(6+4), _);
		});

		it("can be used to increment a number", function(){
			var num = 34;
			num++;
			assert.strictEqual(num, _);
		});

		it("can be used to decrement a number", function(){
			var num = 34;
			num++;
			assert.strictEqual(num, _);
		});

		it("are applied differently as postfix or prefix", function(){
			assert.equal(--10, _);
			assert.equal(10--, _);
			assert.equal(++10, _);
			assert.equal(10++, _);
		});
	});

	describe("Logical operators", function(){
		it("apply to boolean values", function(){
			assert(true && _);
			assert(false || _);
			assert(!_);
		});
		it("will short-circuit their arguments", function(){
			assert.strictEqual( "Hello" || "Danger", _);
			assert.strictEqual( "Hello" && "Danger", _);
		});
	});

    describe("The ternary operator", function(){
    	it("changes its resulting value based on a condition", function(){
    		assert.strictEqual(_?3:4, 3);
    		assert.strictEqual(false?"Brie":_, "Gouda cheese");
    		assert.strictEqual(true?_:"Helicopter", "Hovercraft");
    	});
    });

});

describe("Strings", function(){
	it("can be concatenated together", function(){
		var greeting = "Hello, " + _;
		assert.strictEqual(greeting, "Hello, Awesome.");
	});
});

describe("Javascript", function(){
	it("does really weird shit sometimes", function(){
		// see https://www.destroyallsoftware.com/talks/wat
		assert.strictEqual(100 * null, _);
		assert.strictEqual("4" + 3 , _);
		assert.strictEqual("4" - 3 , _);
	    assert.strictEqual("4" * 3 , _);
		assert.strictEqual(false == 0, _);
	});

	it("gives the special '===' comparison operator", function(){
		assert.strictEqual(0 == false, _);
		assert.strictEqual("" == false, _);
		assert.strictEqual(0 === false, _);
		assert.strictEqual("" === false, _);
	});
})




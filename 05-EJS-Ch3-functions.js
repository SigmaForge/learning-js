var assert = require('assert');

var ___ = undefined;

describe("Functions",function(){
	it("can be called with no arguments and for their side effects", function(){
		var a = 12;
		var myfun = function(){
			___;
		};
		myfun();
		assert.strictEqual(a, 24); // assert is a function :)
	});

	it("can return a value",function(){
		var myfun = function(){
			return ___;
		}
		assert.strictEqual(33, myfun());
	});

	it("can accept arguments", function(){
		var square = function(x){
			___;
		}
		assert.strictEqual(square(4), 16);
	});

	it("can be defined inside other fucntions", function(){
		var outer = function(x,y){
			var inner = function(a){
				return 2 * a;
			};

			return inner(inner(x)+inner(y));
		};
		assert.strictEqual(outer(3,4), ___);
	});

	it("can be returned like other variables", function(){
		var outer = function(x){
			var inner = function(y){
				return x + y;
			}
			return inner;
		};
		var output = outer(5);
		var result = output(9);
		assert.strictEqual(result, ___);
	});

	it("can be called in a chain", function(){
		var f1 = function(x){
			var f2 = function(y){
				var f3 = function(z){
					return x + y + z;
				}	
				return f3;
			}
			return f2;
		};


		var result = f1(3)(4)(5);
		assert.strictEqual(result, ___);
	});

	it("can be passed as arguments like other variables", function(){
		var f1 = function(fn, x){
			return fn(fn(x))
		}
		var f2 = function (a){
			return a*5;
		};

		var result = f1(f2, 3);
		assert.strictEqual(result, ___);
	});

	it("can be made to accept and return other functions", function(){
		var f1 = function(fn){
			var f2 = function(x){
				return fn(x)+fn(x);
			}
			return f2;
		}
		var f3 = function(y){
			return (y+4)*3;
		};
		var result = f1(f3)(2);
		assert.strictEqual(result, ___);
	});

	it("are sufficient to do everything a computer can.", function(){
		var cons = function(x,y){
			return function(fn){
				return fn(x,y);
			}
		};

		var car = function(p){
			return p(function(x,y){return x});
		};

		var cdr = function(p){
			return p(function(x,y){return y});
		};

		// This is pretty deep. We're implementing 'cons cells' using 
		// only functions. We then use these to create a list, and 
		// extract something from the list. 
		//
		// Take your time to work out exactly what's going on. Pen and
		// paper will help in working this out.
		//
		// Before you tackle answering the final question, work out what 
		//
		var result1 = car(cons(1,2));
		assert.strictEqual(result1, ___);
		// 
		// and
		//
		var result2 = cdr(cons(1,2));
		assert.strictEqual(result2, ___);
		//
		// will do. This will help you to figure out the behaviour of
		// the cons cells and the implied contract for car and cdr.
		//
		// While this is not how you would implement this idea in a real
		// program due to efficiency, I found it very beautiful. I hope 
		// you will too.

		var list = cons(1,cons(2,cons(3,cons(4,null))));
		var result = car(cdr(cdr(list)));
		assert.strictEqual(result, ___);
	});

	it("can call themselves!", function(){
		var factorial = function(x){
			___; // fill the body of this function...
		}

		assert.strictEqual(factorial(5), 5*4*3*2*1);
		assert.strictEqual(factorial(7), 7*6*5*4*3*2*1);
	});

	it("in JavaScript can be called with any number of arguments (sadly...)",function(){
		var f1 = function(a){
			return a*2;
		}

		var r1 = f1();
		var r2 = f1(3);
		var r3 = f1(4,3);
		
		assert.strictEqual(r1,___);
		assert.strictEqual(r2,___);
		assert.strictEqual(r3,___);
	});
});
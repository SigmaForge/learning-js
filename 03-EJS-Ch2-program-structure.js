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


// I'm skipping over variables, because you know this stuff already...
describe("Variables", function(){});

describe("[Control flow]: ", function(){
	describe("The 'if' statement", function(){
		
		it("will execute a statement if a condition is true", function(){
			var a = "Hello";
			if(13 > 9){
				a = "Goodbye";
			}
			assert.strictEqual(___, a);
		});

		it("can have an 'else' clause that will execute if the condition is false", function(){
			var a = "Giraffe";
			if(34 > 55){
				a = "Elephant";
			} else {
				a = "Crocodile";
			}
			assert.strictEqual(___, a);
		});

		it("can have multiple clauses each depedning on a condition", function(){
			var a = "Parrot";
			if(1>2){
				a = "Horse";
			} else if (3 >4) {
				a = "Octopus";
			} else if (2>1) {
				a = "Donkey";
			} else {
				a = "Lion";
			}
			assert.strictEqual(___, a);
		});

		it("can have any boolean expression in its conditional", function(){
			var a = "Hippo";
			if(13 > 44 || (1 > 0 && 4 > 5)){
				a = "Puffer fish";
			}
			assert.strictEqual(___, a);
		});

		it("Including function calls", function(){
			var a = "Seagull";
			if(isNaN(a)){
				a = "Albatross";
			}
			assert.strictEqual(___, a);
		});
	});

	describe("The 'while' statement", function(){
		
		it("will execute code while a condition is true", function(){
			var a = 0;
			var b = 0;
			while(a<5){
				a++;
				b = (b+2)*2;
			}
			assert.strictEqual(___, b);
		});

		it("will never execute if the codnition is false", function(){
			var a = "Capuchin";
			while(2>3){
				a = a + a;
			}
			assert.strictEqual(___, a);
		});
	});

	describe("The 'do-while' statement", function(){
		it("will execute its code at least once", function(){
			var a = 192;
			do {
				a = a + a;
			} while (a < 33);
			assert.strictEqual(___, a);
		});
	});

	describe("the 'break' special statement", function(){
		it("will break out of a loop",function(){
			var a = 99;
			while(true){// this will loop forever!
				a = a - 1;
				break;
			}
			assert.strictEqual(___, a);
		});
		it("is mostly useful when used with a condition", function(){
			var a = 4;
			var b = 19;
			while(true){
				a++;
				b = b - 2;
				if( a+b == 20){
					break;
				}
			}
			assert.strictEqual(___, a);
			assert.strictEqual(___, b);
		});
	});

	describe("The 'switch' statement", function(){
		it("is like a series of else-if",function(){
			var animal = "Carp";
			var animal = undefined;
			switch(a){
				case 'Dog':
					sound = "Woof";
					break
				case 'Carp': 
					sound = "Glup Glup";
					break;
				case 'Cat':
					sound = "Meow";
					break;
			}
			assert.strictEqual(___, sound);
		});

		it("can have a default case", function(){
			var where_i_went_on_holiday = "HD 188753";
			var reaction = undefined;
			switch(where_i_went_on_holiday){
				case "Seaside": 
					reaction = "How lovely :)";
					break;
				case "The mountain":
					reaction = "I love the snow!";
					break;
				case "The country":
					reaction = "Why of course dear.";
					break;
				default:
					reaction = "Whoa, trippy!";
					break;
			}
			assert.strictEqual(___, reaction);
		});

		it("will continue executing unless it encounters a break", function(){
			var creature = "Orc";
			var braids_hair = undefined;
			var smells_bad = undefined;
			var eats_goat = undefined;
			switch(creature){
				case "Orc":
					braids_hair = true;
				case "Human":
					eats_goat = true;
				case "Dwarf":
					smells_bad = true;
					break;
				case "Elf":
					braids_hair = true;
					eats_goat = false;
					smells_bad = false;
					break;
			}
			assert(eats_goat === ___);
			assert(braids_hair === ___);
			assert(smells_bad === ___);
		});
	});
});


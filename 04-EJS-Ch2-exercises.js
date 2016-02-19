/*
Write a loop that makes seven calls to console.log 
to output the following triangle:

#
##
###
####
#####
######
#######

It may be useful to know that you can find the 
length of a string by writing .length after it.
*/

//hash <= (Number('#')=7)

for (var hash = "#"; hash.length < 8; hash += '#')
	console.log (hash);

/*FizzBuzz

Write a program that uses console.log to print all the numbers 
from 1 to 100, with two exceptions. For numbers divisible by 3, print 
"Fizz" instead of the number, and for numbers divisible by 5 
(and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz", 
for numbers that are divisible by both 3 and 5 (and still print "Fizz" 
or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to 
weed out a significant percentage of programmer candidates. 
So if you solved it, you’re now allowed to feel good about yourself.)
*/

//More verbose way of doing it:
for (var n = 1; n <=100; n++) {
	if (n %3 ==0 && n%5 ==0) console.log ("FizzBuzz");
	else if (n %3 ==0) console.log ("Fizz");
	else if (n %5 ==0) console.log ("Buzz");
	else console.log (n);
	}
//Best way of doing it:
for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}

/*
Chess board

Write a program that creates a string that represents an 8×8 grid, 
using newline characters to separate lines. At each position of 
the grid there is either a space or a “#” character. The characters 
should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

When you have a program that generates this pattern, 
define a variable size = 8 and change the program so that 
it works for any size, outputting a grid of the given width 
and height.
*/

for (var character="#"; character.length >=8; character+="# ")
	console.log (character);


/*
TIPS
The string can be built by starting with an empty one ("") and 
repeatedly adding characters. A newline character is written "\n".

Use console.log to inspect the output of your program.

To work with two dimensions, you will need a loop inside of a 
loop. Put curly braces around the bodies of both loops to make 
it easy to see where they start and end. Try to properly indent 
these bodies. The order of the loops must follow the order in 
which we build up the string (line by line, left to right, 
top to bottom). So the outer loop handles the lines and the 
inner loop handles the characters on a line.

You’ll need two variables to track your progress. To know 
whether to put a space or a hash sign at a given position, 
you could test whether the sum of the two counters is even (% 2).

Terminating a line by adding a newline character happens 
after the line has been built up, so do this after the 
inner loop but inside of the outer loop.
*/

// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

// A function or variable inside a scope "inherits" anything that's defined within that scope or "higher". In this example, "nestedFunction" lies within the scope of where the variable "internal" was defined. Because of that, nestedFunction has access to that variable. However, if a variable were defined inside "nestedFunction", "myFunction" would not have access to it. You "inherit" from scopes higher than or the same "level" as you—never lower.


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(parameter){

  let index = 0;
  let sum = 0;

  for (i = 0; i <= parameter; i++) { 
    sum = sum + i;
  }

  return sum;
}

summation(4)
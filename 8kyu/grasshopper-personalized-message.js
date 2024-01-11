//DESCRIPTION
// Create a function that gives a personalized greeting.
// This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

//SOLUTION
function greet(name, owner) {
  let bossGreeting = "Hello boss";
  let guestGreeting = "Hello guest";
  if (name === owner) {
    return bossGreeting;
  } else {
    return guestGreeting;
  }
}

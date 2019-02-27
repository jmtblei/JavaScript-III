/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window/global object binding: "this" will be the window object when in the global scope
* 2. implicit binding:the object before "." is "this" when a function is called.
* 3. new binding: "this" is the object that is created and returned at that instance, by the constructor function when used.
* 4. explcicit binding: "this" is defined whenever JS uses call or apply methods.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function greet(say) {
    console.log(this);
    return say;
}
greet("hello");

// Principle 2

// code example for Implicit Binding
const thing = {
    ask: "how are you?",
    greetings: function(greet) {
        console.log(`${greet}, ${this.ask}`);
        console.log(this);
    }
}
thing.greetings('welcome');

// Principle 3

// code example for New Binding
function otherthing(x) {
    this.action = 'stare';
    this.movement = x;
    this.doing = function() {
        console.log(`I'm going to ${this.movement} and ${this.action}.`);
        console.log(this);
    };
} 
const laughing = new otherthing('laugh');
const pointing = new otherthing('point');
laughing.doing();
pointing.doing();

// Principle 4

// code example for Explicit Binding
laughing.doing.call(pointing);
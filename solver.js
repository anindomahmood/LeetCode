// Question 1: Write a function createHelloWorld. It should return a new function that always returns "Hello World". (easy)
/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return function() {
        return "Hello World";
    };
};

const f = createHelloWorld();
console.log(f());

document.getElementById("title").innerHTML = "Hello LeetCode";
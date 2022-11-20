
// Gets user input
var name = prompt("What is your name?");
var num = prompt("What is your favorite number? ");

// Uses user input to print out information
println("Hello " + name + "!");
println(num + "?! That's my favorite number too!");

// Prints out the variable type
println("Name is a " + typeof name);
println("Num is a " + typeof num);

predict('My prediction is that')

function predict(message) {
    const cohere = require('cohere-ai');
    cohere.init('FJ3fFWNtLgxDXGcXgqqh0JQbP1A6NzbZWN3RdDzR');
    (async () => {
    const response = await cohere.generate({
        prompt: message,
    });
    console.log(`Prediction: ${response.body.generations[0].text}`);
    })();
}

  



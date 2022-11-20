const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var prompt = ("What position do you see yourself in 10 years? ");

rl.question(prompt, function (answer) {
    // console.log(`Oh, so your name is ${answer}`);
    // console.log("Closing the interface");
    rl.close();

    answer = "List of technical skills for a " + answer + ":";

    predict(answer)

    function predict(message) {
        const cohere = require('cohere-ai');
        cohere.init('FJ3fFWNtLgxDXGcXgqqh0JQbP1A6NzbZWN3RdDzR');
        (async () => {
            const response = await cohere.generate({ // Set Cohere settings
                model: 'command-xlarge-20221108',
                prompt: message,
                max_tokens: 50,
                temperature: 0
                //stop_sequences: [""]

            });
            // console.log(`${response.body.generations[0].text}`);

            // save the generated text as answer
            var answer = `${response.body.generations[0].text}` 
            
            // Split newlines and store array in result
            const result = answer.split(/\r?\n/);
            // console.log(result)

            // remove the blanks from the array
            var array = result.filter(function (el){
                return el != '';
            })


            // console.log(array)
            console.log('')
            // console.log('Choose a goal towards your future career (Enter an integer): ')

            // remove last element to remove string that was cut off
            array.splice(-1)

            // Loop through the array and print options
            for (var i = 0; i < array.length; i++){
                console.log(array[i]);
            }

            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
            });

            rl.question('Choose a goal towards your future career (Enter an integer): ', function (choice) {
                // console.log(`Oh, so your name is ${answer}`);
                // console.log("Closing the interface");
                rl.close();

                console.log('Your goal is: ' + array[choice - 1]);
                goal = array[choice - 1];
            });

        })();
    }
});

// Gets user input

// var num = prompt("What is your favorite number? ");

// Uses user input to print out information
// println("Hello " + name + "!");
// println(num + "?! That's my favorite number too!");
// 
// Prints out the variable type
// println("Name is a " + typeof name);
// println("Num is a " + typeof num);



  



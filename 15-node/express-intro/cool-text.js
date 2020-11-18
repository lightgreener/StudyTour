const readline = require('readline');
const chalk = require('chalk');
const figlet = require('figlet');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a string: ', function(response){
    console.log('response', response);
    console.log(
        chalk.red(
            figlet.textSync(response,{
                font:'epic',
                verticalLayout:'default',
                horizontalLayout:'default'
            })
        )
    );

    rl.close();  // inside the function
})

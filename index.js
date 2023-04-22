//Required packages
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
//Connect to generateMarkdown module
const generateMarkdown = require('./utils/generateMarkdown.js');

//Question prompts array
const prompts =
    [
        {
        type: 'input',
        message: 'What is the title of your app? (required)',
        name: 'title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid title is required.");
            }
            return true;
        }
        },
        {
        type: 'input',
        message: 'Enter a Description: (required)',
        name: 'description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid description is required.");
            }
            return true;
        }
        },
        {
        type: 'input',
        message: 'Enter Installation Instructions:',
        name: 'instructions'
        },
        {
        type: 'input',
        message: 'Enter usage instructions and examples:',
        name: 'usage'
        },
        {
        type: 'input',
        message: 'Enter Contribution Guidelines:',
        name: 'contribute'
        },
        {
        type: 'input',
        message: 'Enter Test Instructions:',
        name: 'test'
        },
        {
        type: 'list',
        message: 'Choose a license for your project:',
        choices: ['Apache License 2.0', 'Boost Software License 1.0', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'MIT', 'The Unlicense'],
        name: 'license'
        },
        {
        type: 'input',
        message: 'What is your GitHub Username? (required)',
        name: 'gitUser',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username is required.");
            }
            return true;
        }
        },
        {
        type: 'input',
        message: 'What is your email? (required)',
        name: 'email',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid contact email is required.");
            }
            return true;
        }}
    ];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Success!")
    });
}
const writeFileAsync = util.promisify(writeToFile);

// function to initialize program
async function init() {
    try{
        // Run user through prompts,send prompts to generateMarkdown module, then writeFile
        const responses = await inquirer.prompt(prompts);
        console.log('Your Response: ', responses);

        const markdown = generateMarkdown(responses);

        await writeFileAsync('Sample_README.md', markdown);   
    } catch  (error) {
        console.error();
    }

}

// function call to initialize program
init();

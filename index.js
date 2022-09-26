// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message:'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message:'What is your email address?',
    },
    {
        type: 'input',
        name: 'project',
        message:"What is your project's name?",
    },
    {
        type: 'input',
        name: 'description',
        message:'Please write a short description of your project',
    },
    {
        type: 'list',
        name: 'license',
        message:'What kind of license should your project have',
        choices: ['MIT', 'MIT2', 'MIT3']
    },
    {
        type: 'input',
        name: 'dependencies',
        message:'What command should be run to install dependencies?',
    },
    {
        type: 'input',
        name: 'runCommand',
        message:'What command should be run to run tests?',
    },
    {
        type: 'input',
        name: 'usage',
        message:'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'contribution',
        message:'What does the user need to know about contributing to the repo?',
    }
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
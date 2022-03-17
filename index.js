const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        message: 'Please enter a description of your project:',
        name: 'description'
    },
    {
        message: 'Please enter any important information regarding installation:',
        name: 'install'
    },
    {
        message: 'Please enter any important usage information:',
        name: 'usage'
    },
    {
        message: 'Please enter any contribution guidelines:',
        name: 'guidelines'
    },
    {
        message: 'Please enter the test instructions:',
        name: 'test'
    },
    {
        type: 'rawlist',
        message: 'Choose a license for your application:',
        name: 'license',
        choices: [
            {name: 'MIT', value: 'mit'},
            {name: 'Other', value: 'other'},
            {name: 'GPLv2', value: 'gplv2'},
            {name: 'Apache', value: 'apache'},
            {name: 'GPLv3', value: 'gplv3'}
        ]
    },
    {
        message: 'Please enter your GitHub username:',
        name: 'username'
    },
    {
        message: 'Please enter your GitHub profile URL:',
        name: 'githuburl'
    },
    {
        message: 'Please enter you email address:',
        name: 'email'
    },
]).then( (answers) => console.log(answers));
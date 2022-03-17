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
        message: 'Please enter you email address:',
        name: 'email'
    },
]).then( (answers) => {
    const newReadme = 
    `# ${answers['title']}

    ![License](https://img.shields.io/badge/License-${answers['license']}-blue)
    
    ## Table of Contents
    
    1. [Description](#description)
    2. [Installation](#installation)
    3. [Usage](#usage)
    4. [License](#license)
    5. [Contributing](#contributing)
    6. [Tests](#tests)
    7. [Questions](#questions)
    
    ## Description
    
    ${answers['description']}

    ## Installation
    
    ${answers['install']}

    ## Usage
    
    ${answers['usage']}

    ## License
    
    Covered under the ${answers['license']} license.

    ## Contributing
    
    ${answers['guidelines']}

    ## Tests
    
    ${answers['test']}

    ## Questions
    
    If you have any questions regarding this application, please let me know! Contact me via GitHub or Email:
    
    - [GitHub](https://github.com/${answers['username']})
    - Email: ${answers['email']}`;
    fs.writeFile('./dist/README.md', newReadme, (err) => {
        err ? console.error(err) : console.log('README.md succesfully created!');
    })
});
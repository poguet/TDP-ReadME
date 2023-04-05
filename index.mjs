import fs from 'fs/promises';
import inquirer from 'inquirer';
import { renderLicenseSection, renderLicenseBadge, renderLicenseLink } from './utils/markdown.js';

async function createFile() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'fileName',
      message: 'What would you like to name the file?',
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a brief description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage instructions:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please provide guidelines for contributing to your project:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please provide any testing instructions:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please choose a license for your project:',
      choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause'],
    },
  ]);

  const { fileName, title, description, installation, usage, contributing, tests, license } = answers;

  const licenseSection = renderLicenseSection(license);
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  

  const fileContent = `# ${title}
  ## Description
  
  ${description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  
  ## Installation
  
  ${installation}
  
  ## Usage
  
  ${usage}
  
  ## Contributing
  
  ${contributing}
  
  ## Tests
  
  ${tests}
  
  ## License 
  
${licenseSection}
${licenseBadge}
${licenseLink}`;


  await fs.writeFile(fileName, fileContent);

  console.log(`File "${fileName}" created successfully.`);
};

createFile();
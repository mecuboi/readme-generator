// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let tableOfContent = 
  `## Table of Contents
  `
  if (data.dependencies){
    tableOfContent +=
    `* [Installation](#installation)
    `
  };

  if (data.usage) {
    tableOfContent +=
    `* [Usage](#usage)`
  }

  let readme = 
    `# ${data.project}

    ## Description

    ${data.description}

    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Run](#run)
    - [Contributing](#contributing)
    - [License](#license)
    - [Questions](#Questions)

    ## Installation

    ${data.dependencies}

    ## Usage

    ${data.usage}

    ## Run

    ${data.runCommand}

    ## Contributing

    ${data.contribution}

    ## License

    ${data.license}

    ## Questions

    Reach out to me using the links below:

    GitHub: [${data.name}](https://github.com/${data.name})

    Email: ${data.email}

`;

return(readme);
}

module.exports = generateMarkdown;

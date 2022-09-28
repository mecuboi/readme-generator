function renderLicenseBadge(license) {
  if (license === 'MIT License'){
    return (
      `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
    )
    
  } else if (license === 'ISC License') {
    return (
      `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]`
    )
  } else {
    return(``)
  }
  
}
function renderLicenseLink(license) {
  if (license === 'MIT License'){
    return(
      `(https://opensource.org/licenses/MIT)`
    )
    
  } else if (license === 'ISC License') {
    return (
      `(https://opensource.org/licenses/ISC)`
    )
  } 
    else {
    return(``)
  }
  
}

function renderLicenseSection(license) {
  if (license) {
    return(
`## License

${renderLicenseBadge(license)}${renderLicenseLink(license)}`
        )
  } else {
    return('')
  }
}

function renderLicenseTable(license) {
  if (license) {
return (`- [License](#license)`)
  } else {
    return('')
  }
}

function generateMarkdown(data) {

  let readme = 
`# ${data.project}

## Description

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Run](#run)
- [Contributing](#contributing)
${renderLicenseTable(data.license)}
- [Questions](#questions)

## Installation

Install the prerequisite package by running the command below:

    ${data.dependencies}

## Usage

${data.usage}

## Run

To run the app, use the command below:

    ${data.runCommand}

## Contributing

${data.contribution}

${renderLicenseSection(data.license)}
Click the icon to read the license

## Questions

Reach out to me using the links below:

GitHub: [${data.username}](https://github.com/${data.username})

Email: ${data.email}
`;

return(readme);
}

module.exports = generateMarkdown;

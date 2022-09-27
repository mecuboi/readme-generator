// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license){
    return (
      `[![License: ${license}](https://img.shields.io/badge/License-MIT-yellow.svg)]`
    )
    
  } else {
    return(``)
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license){
    return(
      `(https://opensource.org/licenses/${license})`
    )
    
  } else {
    return(``)
  }
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
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

// TODO: Create a function to generate markdown for README
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

    ${data.dependencies}

## Usage

${data.usage}

## Run

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

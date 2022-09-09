// If there is no license, return an empty string
function renderLicenseBadge(License) {
  if (License == 'No License') {
    return '';
  }
  else {
    return `
    ![Badge](https://img.shields.io/badge/license-${License}-blue)
    `;
  }
};

// If there is no license, return an empty string
function renderLicenseLink(License) {
  if (License == 'No License') {
    return '';
  }
  else {
    return `
    [${License}](https://choosealicense.com/licenses/${License})
    `;
  }
}

// If there is no license, return an empty string
function renderLicenseSection(License) {
  if (license == 'No License') {
    return '';
  }
  else {
    return `
    ## [License](#table-of-contents)
    
    The application is covered under the following license(s):
    
    ${renderLicenseLink(License)}
    `;
  }
}
// Create table of contents if statement for license
function LicenseContents(License) {
  if (License == 'No License') {
    return '';
  }
  else {
    return `
    * [License](#License)
    `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table-of-Contents

  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](Usage)
  * [Contribution](Contribution)
  * [Tests](Tests)
  * 

`;
}

module.exports = generateMarkdown;

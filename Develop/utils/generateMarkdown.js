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
};

// If there is no license, return an empty string
function renderLicenseSection(License) {
  if (License == 'No License') {
    return 'This project is not licensed!';
  }
  else {
    return "The application is covered under the following license:";
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.Title}

  ${renderLicenseBadge(data.License)}

  ## Table-of-Contents

  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contribution](#Contribution)
  * [Tests](#Tests)
  * [Questions](#Questions)

  ## [Description](#table-of-contents)

  ${data.Description}

  ## [Usage](#table-of-contents)

  ${data.Usage}

  ## [License](#table-of-contents)

  ${renderLicenseSection(data.License)}

  ${renderLicenseLink(data.License)}

  ## [Contribution](#table-of-contents)

  ${data.Contribution}

  ## [Tests](#table-of-contents)

  ${data.Test}

  ## [Questions](#table-of-contents)

  Please use the following links for contact:

  [GitHub](https://github.com/${data.username})

  [Email: ${data.email}](mailto:${data.email})
`;
};

module.exports = generateMarkdown;

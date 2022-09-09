// Create the license badge; if no license, it returns empty
function renderLicenseBadge(License) {
  if (License == 'No License') {
    return '';
  }
  else {
    return `![Badge](https://img.shields.io/badge/license-${License}-blue)`;
  }
};

// Create the link for the license badge, if there is no license, return empty
function renderLicenseLink(License) {
  if (License == 'No License') {
    return '';
  }
  else {
    return `[${License}](https://choosealicense.com/licenses/${License})`;
  }
};

// Create the section for the license within the markdown, if there is no license, then state it is not licensed
function renderLicenseSection(License) {
  if (License == 'No License') {
    return 'This project is not licensed!';
  }
  else {
    return "The application is covered under the following license:";
  }
};

// Generate the Markdown, which gets called from the index.js file
function generateMarkdown(data) {
  return `
  # ${data.Title}

  ${renderLicenseBadge(data.License)}
  ## Description

  ${data.Description}
  
---
  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
---
  ## [Usage](#table-of-contents)

  ${data.Usage}

---
  ## [License](#table-of-contents)

  ${renderLicenseSection(data.License)}

  ${renderLicenseLink(data.License)}

---
  ## [Contribution](#table-of-contents)

  ${data.Contribution}

---
  ## [Tests](#table-of-contents)

  ${data.Test}

---
  ## [Questions](#table-of-contents)

  Please use the following links for contact:

  [GitHub](https://github.com/${data.username})

  [Email: ${data.email}](mailto:${data.email})
`;
};

module.exports = generateMarkdown;

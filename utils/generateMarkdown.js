//Generate markdown for README
function generateMarkdown(responses) {
  const badge = renderLicenseBadge(responses.license)
  const licenseUrl = renderLicenseLink(responses.license)
  const result = (`# ${responses.title}
  \n![License](${badge} \n
  ${responses.description}
  \n## Table of Contents
  \n* [Installation](#Installation)
  \n* [Instructions](#Instructions)
  \n* [Contributors](#Contributors)
  \n* [Tests](#Tests)
  \n* [License](#License)
  \n## Installation
  \n${responses.installation}
  \n## Usage
  \n${responses.usage}
  \n## Contributing
  \n${responses.contributing}
  \n## Tests
  \n${responses.tests}
  \n## License
  \nLicense: ${responses.license} - see the [License](${licenseUrl}) page.
  \n## Questions
  `)

  return result;
};

var badge;
var link;

//Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badge;
  
  switch (license) {
    case "GNU AGPLv3":
      badge = { name: "GNU+AGPLv3", color: "orange" };
      break;
    case "GNU GPLv3":
      badge = { name: "GNU+GPLv3", color: "red" };
      break;
    case "GNU LGPLv3":
      badge = { name: "GNU+LGPLv3", color: "blue" };
      break;
    case "Mozilla Public License 2.0":
      badge = { name: "Mozilla+2.0", color: "yellow" };
      break;
    case "Apache License 2.0":
      badge = { name: "Apache+2.0", color: "green" };
      break;
    case "MIT License":
      badge = { name: "MIT", color: "brightgreen" };
      break;
    case "Boost Software License 1.0":
      badge = { name: "Boost+Software+1.0", color: "yellowgreen" };
      break;
    case "The Unlicense":
      badge = { name: "The+Unlicense", color: "blueviolet" };
      break;
  }

  if (!badge) {
    return '';
  } 
  
  return `https://img.shields.io/static/v1?label=license&message=${badge.name}&color=${badge.color})`;
}

//Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var link;
  
  switch (license) {
    case "GNU AGPLv3":
      link = "agpl-3.0";
      break;
    case "GNU GPLv3":
      link = "gpl-3.0";
      break;
    case "GNU LGPLv3":
      link = "lgpl-3.0";
      break;
    case "Mozilla Public License 2.0":
      link = "mpl-2.0";
      break;
    case "Apache License 2.0":
      link = "apache-2.0";
      break;
    case "MIT License":
      link = "mit";
      break;
    case "Boost Software License 1.0":
      link = "bsl-1.0";
      break;
    case "The Unlicense":
      link = "unlicense";
      break;
  }
  
  if (!link) {
    return '';
  } 

  return `https://choosealicense.com/licenses/${link}/`;
}

module.exports = generateMarkdown;
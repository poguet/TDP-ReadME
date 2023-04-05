export function renderLicenseBadge(license) {
    if (license === "MIT") {
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    } else if (license === "Apache 2.0") {
      return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
    } else if (license === "GPLv3") {
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
    } else {
      return "";
    }
  }
  
  export function renderLicenseLink(license) {
    if (license === "MIT") {
      return "https://opensource.org/licenses/MIT";
    } else if (license === "Apache 2.0") {
      return "https://opensource.org/licenses/Apache-2.0";
    } else if (license === "GPLv3") {
      return "https://www.gnu.org/licenses/gpl-3.0";
    } else {
      return "";
    }
  }
  
  export function renderLicenseSection(license) {
    if (license) {
      return `
  ## License
  
  This project is licensed under the [${license}](${renderLicenseLink(license)}) license. 
  ${renderLicenseBadge(license)}
  `;
    } else {
      return "";
    }
  }

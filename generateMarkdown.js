

//Is an object that stores data for each license type that the user can chose
licenseLinks = {
  'MIT' : {
    badge : 'https://img.shields.io/badge/license-MIT-',
    infoLink : 'https://opensource.org/licenses/MIT',
    text: 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: \nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. \n THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'
  },
  'Apache' : {
    badge : 'https://img.shields.io/badge/License-Apache_2.0-',
    infoLink : 'https://opensource.org/licenses/Apache-2.0',
    text: 'Licensed under the Apache License, Version 2.0 (the "License"); \n you may not use this file except in compliance with the License. \n You may obtain a copy of the License at \n http://www.apache.org/licenses/LICENSE-2.0 \n Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.'
  },
  'GPL' : {
    badge : 'https://img.shields.io/badge/license-GPL-',
    infoLink : 'https://opensource.org/licenses/MIT',
    text: 'This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. \n This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details. \n You should have received a copy of the GNU General Public License along with this program.  If not, see http://www.gnu.org/licenses.'
  },
  'BSD 2-Clause' : {
    badge : 'https://img.shields.io/badge/license-BSD_2--Clause-',
    infoLink : 'https://opensource.org/licenses/BSD-2-Clause',
    text: 'Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:\n    1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer. \n  2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution. \n  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.'
  },  
  'BSD 3-Clause' : {
    badge : 'https://img.shields.io/badge/license-BSD_3--Clause-',
    infoLink : 'https://opensource.org/licenses/BSD-3-Clause',
    text: 'Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met: \n1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer. \n 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution. \n  3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission. \n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.'
  },
  'Creative Commons Licenses' : {
    badge : 'https://img.shields.io/badge/license-CC--0-',
    infoLink : 'http://creativecommons.org/publicdomain/zero/1.0/',
    text: 'Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use. \n NoDerivatives — If you remix, transform, or build upon the material, you may not distribute the modified material. \n No additional restrictions — You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.'
  }
}

//Gets the license badge from the licenseLink object and adds the color

function renderLicenseBadge(license, color) {
  if (license) {
   return `![License Badge](` + licenseLinks[license].badge + color + `.svg)`
  } else {
    return '';
  }
}


//Gets the license links and text from the licenseLink object
function renderLicenseLink(license) {
  if (license) {
    return `[Link to the license information](` + licenseLinks[license].infoLink + ')\n\n' + licenseLinks[license].text
  } else {
    return '';
  }
}

// Generates the ReadMe from the data passed in
function generateMarkdown(data) {
  return `# ${data.projectName} 

${renderLicenseBadge(data.license , data.color)}

## Description
${data.description}

## Tests
${data.tests}

## How to use
${data.using}

## Dependencies
${data.dependencies}

## How to contribute
${data.contributing}

### Contact Me:
${data.email} 




## License
${renderLicenseLink(data.license)}

${renderLicenseBadge(data.license , data.color)}
`;
}

module.exports = generateMarkdown;

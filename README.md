
## Clone Automation framework
git clone https://github.com/raffi3/QA_framework_cypress.git


## Install Cypress
Cypress is a desktop application that is installed on your computer.

### Requirements:
Node.js 12 or 14 and above

OS:
* Windows 7 and above
* macOS 10.9 and above (64-bit only)
* Linux Ubuntu 12.04 and above, Fedora 21 and Debian 8 (64-bit only)
   * Note for Ubuntu/Debian install required dependencies
   *  ```apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb```

### Install Cypress via npm:
```
cd /your/project/path
npm install cypress --save-dev
npm install -D cypress-xpath
npm install faker --save-dev
```
Optional: add cypress execution dir (`./node_modules/.bin/`) to the `PATH` variable.
> More info here: https://docs.cypress.io/guides/getting-started/installing-cypress

### Run Cypress UI:
`npx cypress open`

### Run Cypress command line:
In your repository folder execute

To run all test cases (headless): 
`npx cypress run`

To run on specific browser: 
`npx cypress run -b browserName`

To run specific test case file: 
`npx cypress run --spec "cypress/integration_tests/<filename>.js”`

To run specific test on chrome: 
`npx cypress run -b chrome --spec "cypress/integration_tests/<filename>.js”`

To run specific test on chrome and keep browser open (good for failures inspection): 
`npx cypress run -b chrome --spec "cypress/integration_tests/<filename>.js” --no-exit`



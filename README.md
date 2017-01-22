# A2A11yQuickstart

##About 

This project demonstrates how ARIA widgets can be built in Angular 2. The Angular 2 Quickstart (https://github.com/angular/quickstart) was the starting point of this project.

##Windows instructions

 * As an administrator install node.js and npm (https://docs.npmjs.com/getting-started/installing-node)
 * Verify that you are running at least node v4.x.x and npm 3.x.x by running "node -v" and "npm -v" from the command prompt
 * As an administrator install the latest version of chromedriver (2.25 at the time of this writing 12/7/2016). Just run "nmp install chromedriver" at the command prompt.
 * Download or clone this project from https://github.com/clane/A2A11yQuickstart
 * Set the location of the chromedriver file in .\protractor.config.js as follows:  
  chromeDriver: '.\\\\node_modules\\\\chromedriver\\\\lib\\\\chromedriver\\\\chromedriver.exe',
 * To run the application, open the command prompt .\ and run "npm run"
 * To run a Karma test, if the application is running in the browser, close the browser and kill the lite-server. Then run "npm test" in .\ using the command prompt
 * To run a Protractor test, run "npm run e2e" from .\ using the command prompt

##OSX instructions

 * Install node.js and npm (not necessary to use the adminstrator account, see https://docs.npmjs.com/getting-started/installing-node)
 * Verify that you are running at least node v4.x.x and npm 3.x.x by running "node -v" and "npm -v" in the terminal
 * Install the latest version of chromedriver (2.25 at the time of this writing 12/7/2016). Just run "nmp install chromedriver" at the terminal.
 * Download or clone this project from https://github.com/clane/A2A11yQuickstart
 * Set the location of the chromedriver file in ./protractor.config.js as follows:  
 chromeDriver: '/usr/local/lib/node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_X.XX',
 * To run the application, open the terminal in ./ and run "npm run" 
 * To run a Karma test, if the application is running in the browser, close the browser and kill the lite-server. Then run "npm test" in ./ using the terminal
 * To run a Protractor test, run "npm run e2e" in ./ using the terminal







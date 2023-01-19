# cypress_ui_api

Link to GIT repository : https://github.com/manzoor78/cypress_ui_api

Pre-Requisites:

    1. Internet is connected. 
    2. Install npm using "sudo apt npm install" (Linux)

Steps to run the project:

    1. Clone the project using git clone https://github.com/manzoor78/cypress_ui_api.git
    2. Navigate to project using cd cypress_ui_api/
    3. Install cypress if not already installed using "npm install cypress --save-dev"
    4. Run tests using "npx cypress run"
    5. Test report is generated on the terminal (STDOUT). This can be enhanced by adding support for html/junit reports.

Structure of Tests:

    cypress
      - config (Has all the config files. For example: utils.json contains base urls) 
      - data  (Contains Test data files)
      - e2e  (Test scenarios - for API and UI)
      - pages  (Selectors for each page which can be re-used)
      - support  (Common commands which can be re-used)
      - screenshots
      - videos
      
      

Technologies used :

    Javascript
    Cypress
    Node
    

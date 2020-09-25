pipeline {
    agent any

    // NodeJs needs to be added as a plugin in the Jenkins instance & added in the Global Tool Configuration
    tools {nodejs "node"}
    
    stages {
        stage ('install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage ('run protractor tests') {
            // stages need to run in parallel as the webdriver needs to run simultaniously with the tests
            parallel {
                stage ('start webdriver') {
                    steps {
                        sh './node_modules/.bin/webdriver-manager update && ./node_modules/.bin/webdriver-manager start'
                    }
                }
                stage ('run tests') {
                    steps {
                        sh './node_modules/.bin/protractor protractor.cucumber.conf.js'
                    }
                }
            }
        }
    }
}
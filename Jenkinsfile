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
                        
                stage ('run tests') {
                    steps {
                        sleep(5)
                        sh './node_modules/.bin/protractor protractor.cucumber.conf.js'
                    }
                }

        }
    }
}
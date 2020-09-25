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
                        
                    steps {
                        sh './node_modules/.bin/protractor protractor.cucumber.conf.js'
                    }


        }
    }
}
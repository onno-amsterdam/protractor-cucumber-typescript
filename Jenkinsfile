pipeline {
    agent any
    tools {nodejs:"node"}
    stages {
        stage ('install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage ('start webdriver') {
            steps {
                sh 'webdriver-manager update && webdriver-manager start'
            }
        }
        stage ('run tests') {
            steps {
                sh 'protractor protractor.conf.js'
            }
        }
    }
}
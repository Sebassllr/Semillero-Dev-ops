pipeline {
	agent any
    environment {
        CI = 'true'
    }
    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') { 
            steps {            	
                sh 'npm run test' 
            }
        }
        stage('Build') { 
            steps {
                // sh 'npm run build'
                // sh 'zip build.zip build'
                echo 'pwd'
            }
        }
    }
    post {
        success {
            archiveArtifacts artifacts: 'build.zip', fingerprint: true
        }
    }
}

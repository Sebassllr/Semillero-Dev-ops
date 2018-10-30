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
                archiveArtifacts artifacts: 'test.log', fingerprint: true         
            }
        }
        stage('Build') { 
            steps {
                sh 'npm run build'
                sh 'zip -r build.zip build'                
            }
        }
    }
    post {
        success {
            archiveArtifacts artifacts: 'build.zip', fingerprint: true
        }
    }
}

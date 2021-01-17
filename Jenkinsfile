pipeline {

    agent any

    stages {

        stage('Test') {
            steps {
                sh '''
                    chmod +x ./jenkins/test/mvn.sh
                    ./jenkins/test/mvn.sh npm test
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker-compose -f ./jenkins/deploy/docker-compose.yml up -d'
            }
        }
    }
}
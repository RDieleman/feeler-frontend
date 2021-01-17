pipeline {

    agent any

    stages {

        stage('Test') {
            steps {
                sh '''
                    docker-compose -f ./jenkins/test/docker-compose.yml up --rm
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
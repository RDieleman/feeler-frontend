pipeline {

    agent any

    stages {

        // stage('Build') {
        //     steps {
        //         sh '''
        //             chmod +x ./jenkins/build/build.sh
        //             ./jenkins/build/build.sh
        //         '''
        //     }
        // }

        stage('Test') {
            steps {
                sh '''
                    chmod +x ./jenkins/test/build.sh
                    ./jenkins/test/build.sh
                    chmod +x ./jenkins/test/mvn.sh
                    ./jenkins/test/mvn.sh
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
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
                sh '''
                    chmod +x ./jenkins/deploy/build.sh
                    ./jenkins/deploy/build.sh
                    chmod +x ./jenkins/deploy/deploy.sh
                    ./jenkins/deploy/deploy.sh
                '''
            }
        }
    }
}
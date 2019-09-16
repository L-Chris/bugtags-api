pipeline{
    agent any
    stages{
        stage('Build'){
            steps{
                sh '''
                  cp ~/conf/.env.bugtags-api ./.env
                '''
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'docker-registry') {
                        def customImage = docker.build('ekwing/bugtags-api', '--compress .')
                        customImage.push('latest')
                    }
                }
            }
        }
        stage('Deploy'){
            steps{
              sh '''
              echo 'Deploy Success!'
              '''
            }
        }
    }
}

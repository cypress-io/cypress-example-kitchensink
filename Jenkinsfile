pipeline {
  agent {
    docker {
      image 'cypress/base:10'
    }
  }

  stages {
    stage('cypress - test') {
      environment {
        CYPRESS_RECORD_KEY = credentials('jenkins-aws-secret-key-id')
      }

      steps {
        sh 'npm ci'
        sh 'npm run cy:verify'
        sh 'npm run cy:run -- --record'
      }
    }
  }
}

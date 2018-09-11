pipeline {
  agent {
    docker {
      image 'cypress/base:10'
    }
  }

  stages {
    stage('cypress - test') {
      environment {
        CYPRESS_RECORD_KEY = credentials('cypress-example-kitchensink-record-key')
      }

      steps {
        echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
        echo "current build"
        echo $currentBuild

        sh 'npm ci'
        sh 'npm run cy:verify'
        sh 'npm run cy:run -- --record'
      }
    }
  }
}

pipeline {
  agent {
    docker {
      image 'cypress/base:10'
    }
  }

  environment {
    TERM = 'xterm' // should enable terminal colors
  }

  stages {
    stage('build') {
      steps {
        echo "Running build ${env.BUILD_ID} on ${env.JENKINS_URL}"
        sh 'npm ci'
        sh 'npm run cy:verify'
        // there a few default environment variables on Jenkins
        // on local Jenkins machine (assuming port 8080) see
        // http://localhost:8080/pipeline-syntax/globals#env
        echo "Running build ${env.BUILD_ID} on ${env.JENKINS_URL}"
      }
    }

    stage('cypress parallel tests') {
      environment {
        // grab dashboard record key from credentials store
        // see https://jenkins.io/doc/book/using/using-credentials/
        CYPRESS_RECORD_KEY = credentials('cypress-example-kitchensink-record-key')
      }

      // https://jenkins.io/doc/book/pipeline/syntax/#parallel
      parallel {
        stage('tester A') {
          steps {
            echo "Running build ${env.BUILD_ID}"
            sh 'npm run test:ci:record -- --parallel ${env.BUILD_ID}'
          }
        }

        stage('tester B') {
          steps {
            echo "Running build ${env.BUILD_ID}"
            sh 'npm run test:ci:record -- --parallel ${env.BUILD_ID}'
          }
        }
      }
    }
  }
}

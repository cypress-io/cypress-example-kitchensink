pipeline {
  agent {
    // this image provides everything needed to run Cypress
    docker {
      image 'cypress/base:10'
    }
  }

  stages {
    // first stage installs node dependencies and Cypress binary
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

    // this tage runs end-to-end tests, and each agent uses the workspace
    // from the previous stage
    stage('cypress parallel tests') {
      environment {
        // we will be recordint test results and video on Cypress dashboard
        // to record we need to set an environment variable
        // we can load the record key variable from credentials store
        // see https://jenkins.io/doc/book/using/using-credentials/
        CYPRESS_RECORD_KEY = credentials('cypress-example-kitchensink-record-key')
      }

      // https://jenkins.io/doc/book/pipeline/syntax/#parallel
      parallel {
        // start several test jobs in parallel, and they all
        // will use Cypress Dashboard to load balance any found spec files
        stage('tester A') {
          steps {
            echo "Running build ${env.BUILD_ID}"
            sh "npm run test:ci:record:parallel"
          }
        }

        // second tester runs the same command
        stage('tester B') {
          steps {
            echo "Running build ${env.BUILD_ID}"
            sh "npm run test:ci:record:parallel"
          }
        }
      }
    }
  }
}

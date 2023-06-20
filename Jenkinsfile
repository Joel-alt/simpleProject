pipeline {
  agent {
      label 'java-docker-slave'
  }
  
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/Joel-alt/simpleProject.git'
      }
    }
    stage('Install dependencies') {
      steps {
        dir("client") {
          sh 'npm install'
        }
        dir("server") {
          sh 'npm install'
        }
      }
    }
    stage('Test application') {
      steps {
        dir("client") {
          sh 'npm run test'
        }
        dir("server") {
          sh 'npm run test'
        }
      }
    }
    stage('Run project') {
      steps{
        sh 'concurrently "cd server && node index.js" "cd client && npm start"'
      }
    }
  }
}

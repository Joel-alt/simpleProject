pipeline {
  agent any

  tools {nodejs "node"}
  stages{
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
    stage('run project') {
        sh 'concurrently "cd server && node index.js" "cd client && npm start"'
    }
  }
}

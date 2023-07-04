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
    stage('Build application') {
      steps {
        dir("client") {
          sh 'npm run build'
        }
      }
    }
    stage('Notify on discord') {
      steps {
        discordSend description: 'Jenkins Pipeline Build', webhookURL: 'https://discord.com/api/webhooks/1125680197648269312/GiYNn6Dft6Py7k2nydjpwKZPy4r2-TmpoBY6dgfIz5vl-_AAn4Z8TKsOFz0bNduMM99J'
      }
    }
  }
}

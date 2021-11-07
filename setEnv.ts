/* tslint:disable */
// @ts-nocheck
const { writeFile, existsSync, mkdirSync } = require('fs');
const { argv } = require('yargs');

require('dotenv').config();
const environment = argv.environment;

function createEnvironmentFile(targetPath, code) {
  writeFile(targetPath, code, function (err) {
    if (err) {
      console.log(err);
    }
    if (code !== '') {
      console.log(`Created ${targetPath}`);
    }
  });
}

if (!existsSync('./src/environments')) {
  mkdirSync('./src/environments');
}

createEnvironmentFile('./src/environments/environment.prod.ts', '');
createEnvironmentFile('./src/environments/environment.ts', '');

const isProduction = environment === 'prod';

const targetPath = isProduction
  ? './src/environments/environment.prod.ts'
  : './src/environments/environment.ts';

const code = `
  export const environment = {
    production: ${isProduction},
    supabaseUrl: "${process.env.supabaseUrl}",
    supbaseKey: "${process.env.supbaseKey}",
    TMDB_API_KEY: "${process.env.TMDB_API_KEY}",
    firebaseConfig: {
      apiKey: "${process.env.apiKey}",
      authDomain: "${process.env.authDomain}",
      databaseURL: "${process.env.databaseURL}",
      projectId: "${process.env.projectId}",
      storageBucket: "${process.env.storageBucket}",
      messagingSenderId: "${process.env.messagingSenderId}",
      appId: "${process.env.appId}"
    }
  };
`;

createEnvironmentFile(targetPath, code);

/* tslint:enable */
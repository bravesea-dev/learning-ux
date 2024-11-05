const { exec } = require('child_process');
const { promisify } = require('util');

const execPromise = promisify(exec);

const commands = [
  { cmd: 'npm i react react-dom', message: 'Installing react and react-dom...' },
  { cmd: 'npm i @mui/material @mui/icons-material @emotion/react @emotion/styled', message: 'Installing MUI packages...' },
  { cmd: 'npm i typescript @types/node @types/react @types/react-dom', message: 'Installing TypeScript and types...' },
  { cmd: 'npm i babel-loader @babel/core @babel/preset-env @babel/preset-react', message: 'Installing Babel and related packages...' },
  { cmd: 'npm i react-scripts', message: 'Installing React Scripts' },
  { cmd: 'npm i redux react-redux @types/react-redux', message: 'Installing Redux and related types...' },
  { cmd: 'npm i --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin', message: 'Installing ESLint and related packages...' },
  { cmd: 'pnpm install', message: 'Populating node_modules using pnpm...'}
];

async function runCommands() {
  for (const { cmd, message } of commands) {
    console.log(message);
    try {
      const { stdout, stderr } = await execPromise(cmd);
      console.log(`Completed: ${cmd}\nOutput:\n${stdout}`);
      if (stderr) {
        console.error(`Error output:\n${stderr}`);
      }
    } catch (error) {
      console.error(`Error executing ${cmd}:`, error);
    }
  }
  console.log("All installations completed.");
}

runCommands();
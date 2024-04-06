Node instalação
# installs NVM (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# download and install Node.js
nvm install 20

# verifies the right Node.js version is in the environment
node -v # should print `v20.12.1`

# verifies the right NPM version is in the environment
npm -v # should print `10.5.0`

Fonte: https://nodejs.org/en/download/package-manager


Criação do projeto:

sudo apt install npm

npm init -y

npm install typescript express

npm install @types/node @types/express --save-dev

npx tsc --init


Crie o arquivo app.ts inicial

atualize o package.json

"scripts": {
    "start": "tsc && node dist/app.js",
    "dev": "nodemon src/app.ts"
},

npm install nodemon ts-node --save-dev


Criação do postgresl

npm install @types/pg --save-dev
